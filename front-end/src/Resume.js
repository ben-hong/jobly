import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import JoblyApi from "./JoblyApi";
import { Box, Button, Typography, Link, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function Resume() {
    const { currUser, setCurrUser } = useContext(AuthContext);
    const { username, resume, resumeTitle } = currUser;
    const [currResume, setCurrResume] = useState(resume);
    const [currResumeTitle, setCurrResumeTitle] = useState(resumeTitle);

    async function fileUpload(evt) {
        const uploadedFile = evt.target.files[0];
        let resumeLink = await JoblyApi.postResume({ resume: uploadedFile });
        let resumeData = { "resume": resumeLink, "resumeTitle": uploadedFile.name }
        await JoblyApi.changeUserProfile(username, resumeData)
        setCurrResume(resumeLink);
        setCurrResumeTitle(uploadedFile.name);
        setCurrUser((user) => ({ ...user, ...resumeData }));

    }

    // checks if current link is expired, getResumeLink will give user a new un-expired link
    async function getResumeLink(evt) {
        evt.preventDefault();
        let link = currResume;
        link = link.split('/').pop();
        const key = link.split('?')[0];
        const resumeLink = await JoblyApi.getResumeLink({ key, signedUrl: currResume });

        if (resumeLink !== currResume) {
            await JoblyApi.changeUserProfile(username, { "resume": resumeLink });
            setCurrResume(resumeLink);
        }

        window.open(resumeLink, '_blank');
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 3 }}>
            <Typography variant="h6"><strong>Upload Your Resumé</strong></Typography>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
                <StyledInput onChange={fileUpload} accept="application/pdf" type="file" />
            </Button>
            <Box sx={{ marginTop: 2 }}>
                {currResume ? <Link href={currResume} onClick={getResumeLink} target="_blank" rel="noopener noreferrer" underline="hover">{currResumeTitle}</Link> : <></>}

            </Box>
        </Box>
    )
}

const StyledInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default Resume;
