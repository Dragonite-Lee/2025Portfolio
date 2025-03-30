import '../App.css';
import me from '../assets/me.jpg';

const InfoHeader = () => {
  return (
    <header className='header'>
      <div>
        <h1>안녕하세요, 이준영입니다</h1>
        <p className='intro-text'>
          <span className='bold'>‘요구사항 분석 - api 설계 - 디자인 구현 - 개발 및 테스트 버전 빌드 -
          최적화 및 배포’</span>의 전반적인 과정에서
          <br />
          사용자와 프로덕트가 마주하는 모든 순간을 최적화 할 수 있는 방향으로
          의사결정 해,
          <br />
          더 나은 결과를 도출할 수 있었습니다.
          <br />
          <br />
          저는 <span className='bold'>‘팀의 생산성 향상’</span>과 <span className='bold'>‘프로덕트의 성장’</span>, 두 가지 목표를 모두
          달성하기 위해 <br />
          개발자 경험(DX)에 기여하는 코드 품질 개선, 빌드 최적화, CI/CD
          파이프라인 구축을 중시합니다. <br />
          이를 통해 팀이 더 효율적으로 일할 수 있도록 돕고, 제품의 품질과 가치를
          높이고자 합니다.
          <br />
          <br />
          여러 차례의 창업과 외주 경험을 바탕으로
          <br />
          <span className='bold'>개발은 ‘목적’이 아닌 ‘수단’</span>이라는 가치관을 가지게 되었습니다.
          사용자에게 실질적인 가치를 전달하는 프로덕트를 치열하게 고민하는
          개발자 입니다.
        </p>
      </div>
      <div>
        <img src={me} alt='내 사진' className='intro-img' />
      </div>
    </header>
  );
};

export default InfoHeader;
