import React from "react";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const About = () => (
  <Section id="about">
    <SectionTitle title="고카톤이란" />
    <div className="responsive-container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <h4 className="title is-4">주제</h4>
                <p>대학생의 생활에 도움을 줄 수 있는 앱 또는 웹 서비스</p>
              </article>
              <article className="tile is-child box">
                <h4 className="title is-4">참가 대상</h4>
                <ul>
                  <li>
                    서비스를 만드는 데 관심이 있으며 개발자 및 디자이너를 꿈꾸는
                    대학(원)생 총 100명
                  </li>
                  <br />
                  <li>고려대학교 대학(원)생 50명, 타대학(원)생 50명</li>
                  <br />
                  <li style={{ textAlign: "right" }}>
                    * 신청은 팀으로만 가능하며 4인~6인으로 구성
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <h4 className="title is-4">참가 신청</h4>
              <ul>
                <li>접수기간 : 12/02(월) - 12/20(금)</li>
                <br />
                <li>신청방법 : 이벤터스를 통한 지원</li>
              </ul>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child box">
            <h4 className="title is-4">시상</h4>
            <ul>
              <li>베스트 개발상 100만원</li>
              <li>베스트 서비스상 100만원</li>
              <li>심사위원 특별상 100만원</li>
              <li>베스트 협업상 50만원</li>
            </ul>
          </article>
          <article className="tile is-child box">
            <h4 className="title is-4">행사 장소</h4>
            <ul>
              <li>고려대학교 하나스퀘어 지하 1층 아뜨리움</li>
              <br />
              <li>서울시 성북구 안암동 5가 126-16</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </Section>
);

export default About;
