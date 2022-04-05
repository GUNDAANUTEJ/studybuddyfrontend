import React from 'react'

function Footer() {
    return (<>
        <footer className="bg-gradient footer w-100">
            <center className="my-1">Copyright &copy; 2021-{new Date().getFullYear()} Study-Buddy</center>
            <div className='d-flex justify-content-around flex-row flex-wrap my-1'>
                <a href="https://github.com/GUNDAANUTEJ/studybuddyfrontend">Frontend</a>
                <a href="https://github.com/GUNDAANUTEJ/StudyBuddy">Backend</a>
                <a href="https://github.com/GUNDAANUTEJ/StudyBuddy/projects/1">Project Board</a>
                <a href="https://github.com/GUNDAANUTEJ/StudyBuddy/wiki">Wiki</a>
                <a href="https://github.com/GUNDAANUTEJ/StudyBuddy/actions">Actions</a>
                <a href="https://github.com/Maruthi158/691-01-F21-DevRFP-Group5/blob/main/Proposal.md">Proposal</a>
                <a href="https://github.com/Maruthi158/691-01-F21-RFP-Group2/blob/main/rfp-study.md">RFP</a>
            </div>
        </footer>
    </>
    )
}

export default Footer