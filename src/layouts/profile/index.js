/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
// @mui icons

import Grid from "@mui/material/Grid";

import LinkedInIcon from "assets/icons/linkedin.png"
import GithubIcon from "assets/icons/github.png"
import MediumIcon from "assets/icons/medium.png"
import LeetCodeIcon from "assets/icons/leetcode.webp"
import GitLabIcon from "assets/icons/gitlab.png"
import HackerRankIcon from "assets/icons/hackerrank.webp"
import CourseraIcon from "assets/icons/coursera.png"
import AWSEducateIcon from "assets/icons/aws_educate.jpeg"
import AWSAcademyIcon from "assets/icons/aws.svg"
import FreeCodeCampIcon from "assets/icons/free_code_camp.webp"
import KaggleIcon from "assets/icons/kaggle.png"



import JavaIcon from "assets/icons/technology/java.png"
import SpringBootIcon from "assets/icons/technology/spring_boot.png"
import AngularIcon from "assets/icons/technology/angular.svg"
import TypeScriptIcon from "assets/icons/technology/typescript.png"
import JavascriptIcon from "assets/icons/technology/javascript.webp"
import ArduinoIcon from "assets/icons/technology/arduino.png"
import AwsIcon from "assets/icons/technology/aws.png"
import CPPIcon from "assets/icons/technology/cpp.png"
import CSSIcon from "assets/icons/technology/css.png"
import DockerIcon from "assets/icons/technology/docker.png"
import ElasticsearchIcon from "assets/icons/technology/elasticsearch.svg"
import GCPIcon  from "assets/icons/technology/gcp.png"
import GitIcon from "assets/icons/technology/git.png"
import GoIcon from "assets/icons/technology/go.png"
import HTMLIcon from "assets/icons/technology/html.png"
import JQueryIcon from "assets/icons/technology/jquery.png"
import MavenIcon from "assets/icons/technology/maven.png"
import MySQLIcon from "assets/icons/technology/mysql.png"
import Neo4jIcon from "assets/icons/technology/neo4j.png"
import PhpIcon from "assets/icons/technology/php.png"
import NodeJsIcon from "assets/icons/technology/nodejs.png"
import OpenCVIcon from "assets/icons/technology/opencv.png"
import PostmanIcon from "assets/icons/technology/postman.png"
import PythonIcon from "assets/icons/technology/python.png"
import RaspberryIcon from "assets/icons/technology/raspberry-pi.png"
import ReactIcon from "assets/icons/technology/react.png"
import RedisIcon from "assets/icons/technology/redis.png"


// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import TechStackCard from "examples/Cards/TechStackCard";
import InterestsCard from "examples/Cards/InterestsCard";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
  
          <Grid
            item
            xs={12}
            xl={8}
            xxl={8}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="Greetings!"
              description={`I'm Lochana, a software engineer with a Bachelor's degree in Electrical and Information Engineering, specializing in Software Engineering, and a postgraduate diploma in Computer Science.
              
              With over 3 years of industry experience at CodeGen International, I've become proficient in building web applications. My tech toolkit includes Java, Spring Boot, Angular, RESTful API, TypeScript, Javascript, HTML, CSS, and databases like MySQL, Redis, Neo4j, and Elasticsearch. 
              I'm well-versed in deploying applications on Google Cloud Platform and using Git for version control, and I'm no stranger to Agile principles.
              
              In my academic journey, I dabbled in various domains, including software engineering, electronics, and telecommunication. I also had the pleasure of diving into robotics, which has remained a passionate hobby of mine. Additionally, I ventured into machine learning, IoT and embedded systems projects, gaining hands-on experience.
             
              I enjoy meeting new people over a cup of coffee. Feel free to reach out at lochanatharanganie@gmail.com. Let's chat and explore exciting opportunities!`}

              info={{}}
              social={[]}
            />
          </Grid>

          <Grid
            item
            xs={12}
            xl={4}
            xxl={4}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title=""
              description=""
              info={{
                name: "Lochana Marasinghe",
                email: "lochanatharanganie@gmail.com",
                location: "Sri Lanka",
              }}
              social={[]}
              professional={[
                {
                  link: "https://www.linkedin.com/in/lochana-marasinghe/",
                  icon: LinkedInIcon,
                  platform: "LinkedIn",
                },
                {
                  link: "https://github.com/lochanamalt",
                  icon: GithubIcon,
                  platform: "GitHub",
                },
                {
                  link: "https://gitlab.com/lochana-marasinghe",
                  icon: GitLabIcon,
                  platform: "GitLab",
                },
                {
                  link: "https://lochanatharanganie.medium.com",
                  icon: MediumIcon,
                  platform: "Medium",
                },
                {
                  link: "https://www.coursera.org/learner/lochana-marasinghe",
                  icon: CourseraIcon,
                  platform: "Coursera",
                },
                {
                  link: "https://www.kaggle.com/lochanamarasinghe",
                  icon: KaggleIcon,
                  platform: "Kaggle",
                },
                {
                  link: "https://www.hackerrank.com/lochAlmighty",
                  icon: HackerRankIcon,
                  platform: "HackerRank",
                },
                {
                  link: "https://leetcode.com/lochanamarasinghe/",
                  icon: LeetCodeIcon,
                  platform: "LeetCode",
                },
                {
                  link: "https://www.freecodecamp.org/lochana-marasinghe",
                  icon: FreeCodeCampIcon,
                  platform: "FreeCodeCamp",
                }

              ]}
            />
          </Grid>

        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} height="100%">
          <TechStackCard
              title="Tech Stack"
              techStack={[
                {
                  icon: JavaIcon,
                  technology: "Java",
                },
                {
                  icon: TypeScriptIcon,
                  technology: "TypeScript",
                },
                {
                  icon: JavascriptIcon,
                  technology: "JavaScript",
                },
                {
                  icon: HTMLIcon,
                  technology: "HTML",
                },
                {
                  icon: CSSIcon,
                  technology: "CSS",
                },
                {
                  icon: PythonIcon,
                  technology: "Python",
                },
                {
                  icon: CPPIcon,
                  technology: "C++",
                },
                {
                  icon: GoIcon,
                  technology: "Go",
                },
                {
                  icon: SpringBootIcon,
                  technology: "Spring Boot",
                },
                {
                  icon: AngularIcon,
                  technology: "Angular",
                },
                {
                  icon: ReactIcon,
                  technology: "React",
                },
                {
                  icon: NodeJsIcon,
                  technology: "NodeJs",
                },
                {
                  icon: JQueryIcon,
                  technology: "jQuery",
                },
                {
                  icon: MavenIcon,
                  technology: "Maven",
                },
                {
                  icon: PhpIcon,
                  technology: "PHP",
                },
                {
                  icon: MySQLIcon,
                  technology: "MySQL",
                },
                {
                  icon: Neo4jIcon,
                  technology: "Neo4j",
                },
                {
                  icon: RedisIcon,
                  technology: "Redis",
                },
                {
                  icon: ElasticsearchIcon,
                  technology: "ElasticSearch",
                },
                {
                  icon: PostmanIcon,
                  technology: "Postman",
                },
              
                {
                  icon: GitIcon,
                  technology: "Git",
                },
                {
                  icon: GCPIcon,
                  technology: "Google Cloud Platform",
                },
                {
                  icon: AwsIcon,
                  technology: "Amazon Web Services",
                },
                {
                  icon: DockerIcon,
                  technology: "Docker",
                },
                {
                  icon: ArduinoIcon,
                  technology: "Arduino",
                },
                {
                  icon: RaspberryIcon,
                  technology: "Raspberry Pi",
                },
                {
                  icon: OpenCVIcon,
                  technology: "OpenCV",
                }

              ]}
            />
        </Grid>
        <Grid item xs={12}>

          <InterestsCard title="Interests" interests={[
            "Competitive Programming",
            "Microservices",
            "Embedded Systems",
            "Machine Learning",
            "Robotics",
            "IoT",
            "Computer Vision"
             ]}/>
          {/* <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Projects
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  Architects design houses
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="project #1"
                    title="scandinavian"
                    description="Music is something that every person has his or her own specific opinion about."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile3}
                    label="project #3"
                    title="minimalist"
                    description="Different people have different taste, and various types of music."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card> */}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Overview;
