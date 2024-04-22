import SiderBar from "../../components/dashboard/SiderBar";
import Header from "../../components/dashboard/Header";
import { DashboardAppStyle } from "../../styles/dashboard/style";
import MutiColList from "../../components/dashboard/MutiColList";
import { projects, anouncements, trendings } from "../../data/projects";
import Card from "../../components/dashboard/Card";

export default function DashboardApp() {
  return (
    <DashboardAppStyle>
      <SiderBar />
      <div>
        <Header />
        <div className="shadow"></div>
      </div>
      <div className="content-container">
        <div className="projects">
          <div className="title">Your Projects</div>
          <MutiColList>
            {projects.map((project) => (
              <Card
                key={project.id}
                name={project.name}
                description={project.description}
              />
            ))}
          </MutiColList>
        </div>
        <div className="announce">
          <div className="title">Announcements</div>
          <div className="content">
            {anouncements.map((anouncement, index) => (
              <div key={anouncement.id} className="item">
                {index != 0 ? <hr /> : null}
                <span className="h1">{anouncement.title}</span>
                <span className="h2">{anouncement.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="trend">
          <div className="title">Trending</div>
          <div className="content">
            {trendings.map((trending) => (
              <div key={trending.id} className="item">
                <img src={trending.avator} />
                <div className="dict">
                  <span className="h1">{trending.name}</span>
                  <span className="h2">{trending.content}</span>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </DashboardAppStyle>
  );
}