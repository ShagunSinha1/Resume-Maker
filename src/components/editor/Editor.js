import React,{useState, useEffect} from 'react'
import styles from './Editor.module.css'
import InputControls from '../inputcontrols/InputControls'
import { X } from 'react-feather';


function Editor(props) {
    const sections=props.sections;
    const information=props.information;

    const [activeSectionKey,setActiveSectionKey] =useState(
        Object.keys(sections)[0]
    );

    const [activeInformation, setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    );

    const [sectionTitle, setSectionTitle] = useState (
      sections[Object.keys(sections)[0]]
    );

    const [activeDetailIndex,setActiveDetailIndex] = useState(0);

    const [values,setValues] = useState ({
      name: activeInformation?.detail?.name || "",
      title: activeInformation?.detail?.title || "",
      phoneNumber: activeInformation?.detail?.phone || "",
      email: activeInformation?.detail?.email || "",
    
     })

     const handlePointUpdate =(value,index) => {
        const tempValues={...values};
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index]=value;
        setValues(tempValues);
     }

    const workExpBody =(
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControls 
          label="Title"
          placeholder= "Enter title eg. Backend developer"
          value={values.title}
          onChange= {(event) =>
            setValues((prev) => ({...prev, title:event.target.value})
            )}
          />
          <InputControls
          label="Company name"
          placeholder="Enter company name eg. Facebook"
          value={values.companyName}
          onChange= {(event) =>
            setValues((prev) => ({...prev, companyName:event.target.value})
            )}
          />

        </div>
        <div className={styles.row}>
          <InputControls
          label= "Certificate Link"
          placeholder= "Enter certificate link"
          value={values.certificateLink}
          onChange= {(event) =>
            setValues((prev) => ({...prev, certificateLink:event.target.value})
            )}
          />
          <InputControls
          label="Location"
          placeholder= "Enter location eg. Remote"
          value={values.location}
          onChange= {(event) =>
            setValues((prev) => ({...prev, location:event.target.value})
            )}
        />

        </div>
        <div className={styles.row}>
          <InputControls
          label= "Start Date"
          type = "date"
          placeholder= "Enter start date of work"
          value={values.startDate}
          onChange= {(event) =>
            setValues((prev) => ({...prev, startDate:event.target.value})
            )}
          />
          <InputControls
          label="End date"
          type = "date"
          placeholder= "Enter end date of work"
          value={values.endDate}
          onChange= {(event) =>
            setValues((prev) => ({...prev, endDate:event.target.value})
            )}
        />
        </div>

        <div className={styles.column}>
          <label>Enter work description</label>
          <div className={styles.multi}><InputControls placeholder="Line1" 
          value={values.points? values.points[0] :""} 
          onChange = {(event) =>handlePointUpdate(event.target.value,0)}
          /></div> 
          <div className={styles.multi}><InputControls placeholder="Line2" 
          value={values.points? values.points[1] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,2)}
           /></div> 
          <div className={styles.multi}><InputControls placeholder="Line3" 
          value={values.points? values.points[2] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,3)}
           /></div> 
          
        </div>
      </div>
    );
    const projectBody =(
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControls
          label="Overview"
          placeholder= "Enter basic overview of project"
          value={values.overview}
          onChange= {(event) =>
            setValues((prev) => ({...prev, overview:event.target.value})
            )}
          />
          <InputControls
          label="Deployed Link"
          placeholder= "Enter Deployed link of project"
          value={values.deployedLink}
          onChange= {(event) =>
            setValues((prev) => ({...prev, deployedLink:event.target.value})
            )}
          />
          <InputControls
          label="Github Link"
          placeholder= "Enter github link of project"
          value={values.github}
          onChange= {(event) =>
            setValues((prev) => ({...prev, github:event.target.value})
            )}
          />
        </div>
        <div className={styles.column}>
          <label>Enter description of project</label>
          <div className={styles.multi}><InputControls placeholder="Line1" 
          value={values.points? values.points[0] :""} 
          onChange = {(event) =>handlePointUpdate(event.target.value,0)}
          /></div> 
          <div className={styles.multi}><InputControls placeholder="Line2" 
          value={values.points? values.points[1] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,1)}
           /></div> 
          <div className={styles.multi}><InputControls placeholder="Line3" 
          value={values.points? values.points[2] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,2)}
           /></div> 
          <div className={styles.multi}><InputControls placeholder="Line3" 
          value={values.points? values.points[3] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,3)}
           /></div> 
          
        </div>

      </div>
    );
    
    const educationBody = (
      <div className={styles.detail}>
        <div className={styles.row}>
        <InputControls 
          label="Title"
          placeholder= "Enter title eg. B-Tech"
          value={values.title}
          onChange= {(event) =>
            setValues((prev) => ({...prev, title:event.target.value})
            )}
          />
          <InputControls
          label="College name"
          placeholder="Enter name of your college"
          value={values.collegeName}
          onChange= {(event) =>
            setValues((prev) => ({...prev, collegeName:event.target.value})
            )}
          />

        </div>
       
        <div className={styles.row}>
          <InputControls
          label= "Start Date"
          type = "date"
          placeholder= "Enter start date of this education"
          value={values.startDate}
          onChange= {(event) =>
            setValues((prev) => ({...prev, startDate:event.target.value})
            )}
          />
          <InputControls
          label="End date"
          type = "date"
          placeholder= "Enter end date of this education"
          value={values.endDate}
          onChange= {(event) =>
            setValues((prev) => ({...prev, endDate:event.target.value})
            )}
        />
        </div>
      </div>
    );

    const personalInfoBody =(
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControls
          label = "Name"
          placeholder = "Enter your full name"
          value={values.name}
          onChange= {(event) =>
            setValues((prev) => ({...prev, name:event.target.value})
            )}
          />
          <InputControls
          label = "title"
          placeholder = "Enter your title eg. Backend developer"
          value={values.title}
          onChange= {(event) =>
            setValues((prev) => ({...prev, title:event.target.value})
            )}
          />

        </div>

        <div className={styles.row}>
          <InputControls
          label = "Phone Number"
          placeholder = "Enter your Phone number"
          value={values.phoneNumber}
          onChange= {(event) =>
            setValues((prev) => ({...prev, phoneNumber:event.target.value})
            )}
          />
          <InputControls
          label = "Email"
          placeholder = "Enter your email address eg. .......@gmail.com"
          value={values.email}
          onChange= {(event) =>
            setValues((prev) => ({...prev, email:event.target.value})
            )}
          />

        </div>
        

      </div>
    );
    const achievementsBody =(
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>Enter your achievements</label>
          <label>Enter description of project</label>
          <div className={styles.multi}><InputControls placeholder="Line1" 
          value={values.points? values.points[0] :""} 
          onChange = {(event) =>handlePointUpdate(event.target.value,0)}
          /></div> 
          <div className={styles.multi}><InputControls placeholder="Line2" 
          value={values.points? values.points[1] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,1)}
           /></div> 
          <div className={styles.multi}><InputControls placeholder="Line3" 
          value={values.points? values.points[2] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,2)}
           /></div> 
          <div className={styles.multi}><InputControls placeholder="Line3" 
          value={values.points? values.points[3] : ""}
          onChange = {(event) =>handlePointUpdate(event.target.value,3)}
           /></div> 
        </div>
      </div>
    );

    const basicInfoBody =(
      <div className={styles.details}>
        <div className={styles.column}>
        <InputControls
          label = "linkedin Link"
          placeholder = "Enter your linkedin profile link"
          value={values.linkedin}
          onChange= {(event) =>
            setValues((prev) => ({...prev, linkedin:event.target.value})
            )}
          />
        <InputControls
          label = "Github Link"
          placeholder = "Enter your github profile link"
          value={values.github}
          onChange= {(event) =>
            setValues((prev) => ({...prev, github:event.target.value})
            )}
          />
          
        </div>
      </div>
    );

    const summaryBody= (
      <div className={styles.details}>
        <InputControls
        label = "Summary"
        placeholder= "Enter summary of your resume"
        value={values.summary}
        onChange= {(event) =>
          setValues((prev) => ({...prev, summary:event.target.value})
          )}
        />
      </div>
    );
    const otherBody= (
      <div className={styles.details}>
        <InputControls
        label = "Other"
        placeholder= "Add some more information to your resume"
        value={values.other}
        onChange= {(event) =>
          setValues((prev) => ({...prev, other:event.target.value})
          )}
        />
      </div>
    );

    const generateBody =() =>{
      switch (sections[activeSectionKey]) {

          case sections.personalInfo:
            return personalInfoBody;
          case sections.basicInfo:
            return basicInfoBody;
          case sections.workExp:
            return workExpBody;
          case sections.project:
            return projectBody;
          case sections.education:
            return educationBody;
          case sections.achievements:
            return achievementsBody;
          case sections.summary:
            return summaryBody;
          case sections.other:
            return otherBody;
          default:
            return null;
      }
    };

    const handleSubmission = () => {
      switch (sections[activeSectionKey]) {
        case sections.personalInfo: {
          const tempDetail = {
            name: values.name,
            title: values.title,
            
            email: values.email,
            phoneNumber: values.phoneNumber,
          };
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.personalInfo]: {
              ...prev[sections.personalInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.basicInfo: {
          const tempDetail = {
           
            linkedin: values.linkedin,
            github: values.github,
            
          };
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.basicInfo]: {
              ...prev[sections.basicInfo],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.workExp: {
          const tempDetail = {
            certificationLink: values.certificationLink,
            title: values.title,
            startDate: values.startDate,
            endDate: values.endDate,
            companyName: values.companyName,
            location: values.location,
            points: values.points,
          };
          const tempDetails = [...information[sections.workExp]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.workExp]: {
              ...prev[sections.workExp],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.project: {
          const tempDetail = {
            link: values.link,
            title: values.title,
            overview: values.overview,
            github: values.github,
            points: values.points,
          };
          const tempDetails = [...information[sections.project]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.project]: {
              ...prev[sections.project],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.education: {
          const tempDetail = {
            title: values.title,
            college: values.college,
            startDate: values.startDate,
            endDate: values.endDate,
          };
          const tempDetails = [...information[sections.education]?.details];
          tempDetails[activeDetailIndex] = tempDetail;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.education]: {
              ...prev[sections.education],
              details: tempDetails,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.achievement: {
          const tempPoints = values.points;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.achievement]: {
              ...prev[sections.achievement],
              points: tempPoints,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.summary: {
          const tempDetail = values.summary;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.summary]: {
              ...prev[sections.summary],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
        case sections.other: {
          const tempDetail = values.other;
  
          props.setInformation((prev) => ({
            ...prev,
            [sections.other]: {
              ...prev[sections.other],
              detail: tempDetail,
              sectionTitle,
            },
          }));
          break;
        }
      }
    };

    const handleAddNew = () => {
      const details = activeInformation?.details;
      if (!details) return;
      const lastDetail = details.slice(-1)[0];
      if (!Object.keys(lastDetail).length) return;
      details?.push({});
  
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSectionKey]]: {
          ...information[sections[activeSectionKey]],
          details: details,
        },
      }));
      setActiveDetailIndex(details?.length - 1);
    };

    const handleDeleteDetail = (index) => {
      const details = activeInformation?.details
        ? [...activeInformation?.details]
        : "";
      if (!details) return;
      details.splice(index, 1);
      props.setInformation((prev) => ({
        ...prev,
        [sections[activeSectionKey]]: {
          ...information[sections[activeSectionKey]],
          details: details,
        },
      }));
  
      setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    };

    useEffect(() => {
      const activeInfo =information[sections[activeSectionKey]];
      setActiveInformation(activeInfo);
      setSectionTitle(sections[activeSectionKey]);
      setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",
      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificationLink: activeInfo?.details
        ? activeInfo.details[0]?.certificationLink || ""
        : "",
      companyName: activeInfo?.details
        ? activeInfo.details[0]?.companyName || ""
        : "",
      college: activeInfo?.details
        ? activeInfo.details[0]?.college || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [...activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",
      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
      linkedin: activeInfo?.detail?.linkedin || "",
      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",
      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
      
    }, [activeSectionKey]);
    
    useEffect(() =>{
      setActiveInformation(information[sections[activeSectionKey]]);
    },[information]);

    useEffect(() => {
      const details = activeInformation?.details;
      if (!details) return;
  
      const activeInfo = information[sections[activeSectionKey]];
      setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        certificationLink:
          activeInfo.details[activeDetailIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || "",
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
      });
    }, [activeDetailIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
        <div className={`${styles.section} ${
            activeSectionKey === key ? styles.active : ""
        }`} 
        
        key={key}
            onClick = {() => setActiveSectionKey(key)}
            >
             {sections[key]} 
        </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControls 
        label= "Title" 
        placeholder="Enter section Title" 
        value ={sectionTitle}
        onChange ={(event) => setSectionTitle(event.target.value)}
        />
            
            <div className={styles.chips}>
            {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}>
                      <p>
                        {sections[activeSectionKey]} {index+1}
                        </p>
                      <X onClick= {(event) => {
                        event.stopPropagation();
                        handleDeleteDetail(index);
                      }}
                      />
                </div>
                  )):""}

                {activeInformation?.details && activeInformation?.details.length>0 ?
                (<div className={styles.new} onClick ={handleAddNew}>
                  +New
                  </div>):(
                  ""
                )
                }
                  
              </div>

        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  )
}

export default Editor
