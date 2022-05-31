import React from 'react';
import {Accordion, AccordionSummary, Typography, AccordionDetails, Box} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';
import {useAccordionExpended} from "../accordion.state";

const items = [
    {
        panel: "panel1",
        title: "General settings",
        subtitle: "I am an accordion",
        description: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."
    },
    {
        panel: "panel2",
        title: "Users",
        subtitle: "You are currently not an owner",
        description: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
    },
    {
        panel: "panel3",
        title: "Advanced settings",
        subtitle: "Filtering has been entirely disabled for whole web server",
        description: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
    },
    {
        panel: "panel4",
        title: "Personal data",
        subtitle: "",
        description: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
    }
];

function AccordionTest() {
    return (
        <Box mt={5}>
            <Typography variant={"h1"}>Test Accordion</Typography>
            <Box mt={5}>
                {items.map(({panel, title, subtitle, description}) => (
                    <AccordionItem key={panel} {...{panel, title, subtitle, description}}/>
                ))}
            </Box>
        </Box>
    );
}

export default AccordionTest;

function AccordionItem({panel, title, subtitle, description}) {
    const [expanded, setExpanded] = useAccordionExpended();

    const handleChange = (event, isExpanded) => {
        setExpanded(isExpanded ? panel : '');
    };

    return (
        <Accordion expanded={expanded === panel} onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMore/>} aria-controls={`${panel}bh-content`} id={`${panel}bh-header`}>
                <Typography sx={{width: '33%', flexShrink: 0}}>{title}</Typography>
                <Typography sx={{color: 'text.secondary'}}>{subtitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{description}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}