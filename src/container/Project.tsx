import { useState, useEffect } from 'react';
import '../App.css';
import { projectsData } from './content';
import Confetti from 'react-confetti';

const Project = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionDirection, setTransitionDirection] = useState<
    'left' | 'right'
  >('right');
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {

    setShowConfetti(true); // 콘페티 표시
    setTimeout(() => setShowConfetti(false), 10000); // 3초 후 콘페티 제거
  };
  const handlePrev = () => {
    setTransitionDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) =>
        prev > 0 ? prev - 1 : projectsData.length - 1
      );
    }, 300); // 트랜지션 효과 중간에 프로젝트 변경
  };

  const handleNext = () => {
    setTransitionDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProject((prev) =>
        prev < projectsData.length - 1 ? prev + 1 : 0
      );
    }, 300); // 트랜지션 효과 중간에 프로젝트 변경
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);


  const project = projectsData[currentProject];

  return (
    <div className='project-container'>
      <h2 className='project-title'>{project.title}</h2>

      <div className='navigation'>
        <button
          onClick={handlePrev}
          className='nav-button'
          disabled={isTransitioning}
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className='nav-button'
          disabled={isTransitioning}
        >
          &gt;
        </button>
      </div>

      <div
        className={`content-wrapper ${
          isTransitioning ? `slide-${transitionDirection}` : ''
        }`}
      >
        <div className='overview-section'>
          <h3>개요</h3>
          <div className='divider'></div>
          <h3>창업 배경</h3>
          <p>{project.background}</p>
          <h3>타켓 퍼르소나</h3>
          <p>{project.persona}</p>
          <h3>핵심 전략</h3>
          <p>{project.strategy}</p>

          <div className='upvote-section'>
            <p>이 프로젝트가 흥미로웠다면?</p>
            <button
              className='upvote-button'
              onClick={() => triggerConfetti()}
            >
              👍 Upvote!
            </button>
            {showConfetti && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={200} // 콘페티 조각 수
                recycle={false} // 한 번만 터지고 재사용 안 함
              />
            )}
          </div>
        </div>

        <div className='details-section'>
          <div className='details-content'>
            <div className='section-title'>주요 실행 액션</div>
            {project.actions.map((action) => (
              <div key={action.id} className='action-item'>
                <h4>
                  {action.id}. {action.title}
                </h4>
                <p>{action.description}</p>
              </div>
            ))}

            <div className='section-title'>결과</div>
            {project.results.map((result) => (
              <div key={result.id} className='result-item'>
                <h4>{result.id}</h4>
                <p>{result.description}</p>
              </div>
            ))}

            <div className='section-title'>레슨런</div>
            {project.lessons.map((lesson) => (
              <div key={lesson.id} className='lesson-item'>
                <h4>{lesson.id}</h4>
                <p>{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
