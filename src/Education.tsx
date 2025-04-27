import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Education() {
  return (
    <div className="border border-black">
      <Accordion
        defaultExpanded
        disableGutters
        sx={{ fontFamily: "var(--font-mono)", margin: "auto" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className=" scale-200" />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "var(--color-primary)",
          }}
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
            <h1>Education</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "var(--color-primary)" }}>
          <Typography className="px-14 pb-10">
            <div className="flex w-full items-center gap-[15%]">
              <ul className="text-2xl list-disc list-inside max-w-1/2">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni,
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  sint eaque, porro rem saepe nemo nam pariatur tempore omnis.
                  Sit.
                </li>
                <li>Lorem, ipsum dolor.</li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  velit ipsa at autem a quis veritatis.
                </li>
              </ul>
              <div className="border-accent border-8 rounded-full w-72 h-72 shadow-secondary shadow-xl inset-shadow-secondary inset-shadow-sm"></div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
