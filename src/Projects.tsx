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
    <div className="px-14 w-full" id="projects">
      <h1 className="ml-auto mr-auto w-fit mt-10 text-accent">Projects</h1>
      <Timeline position="alternate-reverse">
        <TimelineItem>
          <TimelineOppositeContent className="opacity-50">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="filled"
              sx={{ backgroundColor: "var(--color-accent)" }}
            />
            <TimelineConnector
              sx={{ backgroundColor: "var(--color-primary_darker)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <ProjectCard></ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              variant="filled"
              sx={{ backgroundColor: "var(--color-accent)" }}
            />
            <TimelineConnector
              sx={{ backgroundColor: "var(--color-primary_darker)" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ transform: "translateX(2.5rem)" }}>
            <ProjectCard></ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              variant="filled"
              sx={{ backgroundColor: "var(--color-accent)" }}
            />
            <TimelineConnector
              sx={{ backgroundColor: "var(--color-primary_darker)" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <ProjectCard></ProjectCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              variant="filled"
              sx={{ backgroundColor: "var(--color-accent)" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ transform: "translateX(2.5rem)" }}>
            <ProjectCard></ProjectCard>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
