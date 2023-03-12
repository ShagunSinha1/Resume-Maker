import React , {useEffect, useRef, useState}from 'react';
import styles from './Body.module.css'
import {Download} from 'react-feather'
import Editor from '../editor/Editor';
import Resume from '../resume/Resume';
import ReactToPrint from 'react-to-print';


function Body() {
   
    const sections = {
        personalInfo: "Personal Info",
        basicInfo: "Basic Info",
        workExp : "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Others",
    };
    const resumeRef =useRef()
    

    const [resumeInformation, setResumeInformation] = useState({
        [sections.personalInfo]: {
          id: sections.personalInfo,
          sectionTitle: sections.personalInfo,
          detail: {},
        },
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

useEffect(()=> {
    console.log(resumeInformation);
},[resumeInformation]);


  return (
    <div className={styles.container}>
        <p className={styles.heading}>RESUME BUILDER</p>
        <div className={styles.toolbar}>
            <ReactToPrint
            trigger ={() => {
                return(

                    <button>DOWNLOAD<Download/> </button>
                );
            }}
            content = {() =>resumeRef.current}
            />
        </div>
        <div className={styles.main}>
            <Editor 
            sections={sections} 
            information={resumeInformation}
            setInformation = {setResumeInformation}/>
            <Resume
            ref={resumeRef}
            sections={sections} 
            information={resumeInformation}
            
            />
        </div>
        
      
    </div>
  )
}

export default Body
