import programmingImage from "../../images/programming.svg";
import musicImage from "../../images/music.svg";
import financeImage from "../../images/finance.svg";

export const INFO_CARD_DATA = {
  programming: {
    title: "Software engineer by profession",
    sections: [
      <>
        I have about a year of professional experience as a software engineer.
        I've worked with <b>AngularJS</b>, <b>Grails</b> using <b>Java</b> and{" "}
        <b>Groovy</b>. I'm also an <b>AWS Certified Cloud Practitioner</b>.
      </>,
      <>
        In my spare time, I enjoy learning other exciting technologies on the
        side. I've been enjoying <b>React</b> and <b>Serverless Architecture</b>
        .
      </>,
      <>I'm currently looking for exciting opportunities and offers.</>,
    ],
    image: programmingImage,
  },
  music: {
    title: "Guitarist at heart",
    sections: [
      <>
        I have been playing <b>guitar</b> and <b>ukulele</b> for about 5 years.
        Making my own album is one of my life-long goals.
      </>,
      <>
        I love just about any genre but my favorites are desert rock, jazz and
        doom metal.
      </>,
    ],
    image: musicImage,
  },
  finance: {
    title: "Personal finance enthusiast",
    sections: [
      <>
        I enjoy learning about <b>personal finance</b>. I value well-planned
        budgeting, spending and investing in my personal life.
      </>,
    ],
    image: financeImage,
  },
};
