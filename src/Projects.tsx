import ProjectCard from "./ProjectCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
// import { Timeline } from "@mui/icons-material";

export default function Projects() {
  return (
    <div className="px-14 w-full shadow-2xl shadow-primary_darker pb-20" id="projects">
      <h1 className="ml-auto mr-auto w-fit mt-10 text-accent">Projects</h1>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineOppositeContent className="opacity-50">2020</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="filled" sx={{ backgroundColor: "var(--color-accent)" }} />
            <TimelineConnector sx={{ backgroundColor: "var(--color-primary_darker)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <ProjectCard>
              <h2>Hello</h2>
              <p className="w-2/3 text-wrap float-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                <ul className="">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-1/3 object-cover aspect-square float-end rounded-full  border-4 border-accent"
              />
            </ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="filled" sx={{ backgroundColor: "var(--color-accent)" }} />
            <TimelineConnector sx={{ backgroundColor: "var(--color-primary_darker)" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ transform: "translateX(2.5rem)" }}>
            <ProjectCard>
              <h2>Hello</h2>
              <p className="w-2/3 text-wrap float-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-1/3 object-cover aspect-square float-end rounded-full  border-4 border-accent"
              />
            </ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="filled" sx={{ backgroundColor: "var(--color-accent)" }} />
            <TimelineConnector sx={{ backgroundColor: "var(--color-primary_darker)" }} />
          </TimelineSeparator>
          <TimelineContent>
            <ProjectCard>
              <h2>Hello</h2>
              <p className="w-2/3 text-wrap float-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-1/3 object-cover aspect-square float-end rounded-full  border-4 border-accent"
              />
            </ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="filled" sx={{ backgroundColor: "var(--color-accent)" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ transform: "translateX(2.5rem)" }}>
            <ProjectCard>
              <h2>Hello</h2>
              <p className="w-2/3 text-wrap float-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt!
                  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul>
              </p>
              <img
                src="https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-1/3 object-cover aspect-square float-end rounded-full  border-4 border-accent"
              />
            </ProjectCard>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
