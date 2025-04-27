import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Experience() {
  return (
    <div className=" shadow-primary_darker shadow-md " id="experience">
      <Accordion
        defaultExpanded
        disableGutters
        sx={{
          fontFamily: "var(--font-mono)",
          backgroundColor: "var(--color-primary)",
          margin: "auto",
          boxShadow: "none",
          paddingRight: "3.5rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="scale-200 text-black" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            className="px-10 py-0 text-accent font-bold font-mono"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "var(--font-weight-semibold)",
              paddingY: "0",
            }}
          >
            <h1>Experience</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "var(--color-primary)" }}>
          <Typography className="px-14 pb-10">
            <div className="flex w-full items-center gap-[15%] text-black">
              <div className="border-accent border-8 rounded-full w-72 h-72 animate-[shadow_12s_linear_infinite]">
                <img
                  src="https://images.unsplash.com/photo-1664735246099-6f4dd53c236a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="-z-10 opacity-60 min-w-full min-h-full object-cover rounded-full"
                />
              </div>
              <div className="max-w-1/2">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <ul className="text-2xl ">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni,
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio sint eaque, porro rem saepe nemo nam pariatur tempore
                    omnis. Sit.
                  </li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius velit ipsa at autem a quis veritatis.
                  </li>
                </ul>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
