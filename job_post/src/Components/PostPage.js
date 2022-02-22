import {useRef} from "react"

function PostPage() {

    const title=useRef(null)
    const loc=useRef(null)
    const minYr=useRef(null)
    const maxYr=useRef(null)
    const desc=useRef(null)
    const cat=useRef(null)
    const fn=useRef(null)
    const minGr=useRef(null)
    const maxGr=useRef(null)
    const tag=useRef(null)

    const submit = (e) => {
        if (maxYr.current.value<minYr.current.value){
            return alert("Minimum Experience year must be less than equal to Maximum Experience Year")
        }

        if (minGr.current.valuer>=maxGr.current.value){
            return alert("Minimum Graduation year must be Smaller than Maximum Graduation Year")
        }

        const url = 'http://localhost:8001/v1jobs/job'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Title":"Full Stack Developer Updated",
                "Locations":["Pune", "Bangalore"],
                "MustHaveSkills":["ReactJS"],
                "YearsOfExperience":"5+",
                "Category":["Software Dev"],
                "EmploymentType":"Full Time"
            })
        };
        fetch(url, requestOptions)
            .then(response => alert("Submitted"))
            .catch(error => alert("Something Went Wrong"))
      };

      const cancelled=()=>{
          title.current.value=""
          loc.current.value=""
          minYr.current.value=""
          maxYr.current.value=""
          desc.current.value=""
          cat.current.value=""
          fn.current.value=""
          minGr.current.value=""
          maxGr.current.value=""
          tag.current.value=""
      }

    return (
        <div className="postPage">
            <div className="heading">
                <h1>POST JOB</h1>
            </div>

            <form id="form" onSubmit={(e)=>submit(e)}>
                <h2>Basic Details</h2>
               
               {/* Job Title */}

                <p>
                    <label for="title">Job Title*</label>
                </p>
                <input id="title" className="ip1" type="text" placeholder="Write a title that appropriately describes this job" required ref={title} autoFocus/>
               
               {/* Location */}

                <p>
                    <label for="location">Location*</label>
                </p>
                <input id="location" className="ip1" type="text" placeholder="+ Add Location" required ref={loc}/>
               
               {/* Experience */}

                <p>
                    <label for="experience">Years of Experience*</label>
                </p>
                <div className="align1">
                    <select id="experience" name="exp" className="ip2" required ref={minYr}>
                        <option value="" disabled selected  hidden>Select Min</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>

                    <select name="exp" className="ip2" required ref={maxYr}>
                        <option value="" disabled selected hidden>Select Max</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>
                </div>

                {/* Job Description */}

                <p>
                    <label for="desc">Job Description*</label>
                </p>
                <textarea id="desc" name="desc" placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better" required ref={desc}/>

                <h2>Targeting</h2>

                <div className="align1">
                    <div style={{width:"100%"}}>
                        
                        {/* Category */}

                        <p>
                            <label for="cat">Category*</label>
                        </p>
                        <select id="cate" name="cat" required className="ip3" ref={cat}>
                            <option value="" hidden disabled selected>Select</option>
                            <option value="cat1">Category 1</option>
                            <option value="cat2">Category 2</option>
                            <option value="cat3">Category 3</option>
                        </select>
                    </div>

                    <div style={{width:"100%", marginLeft:"0.4cm"}}>

                        {/* Functional Area */}

                        <p>
                            <label for="fnarea">Functional Area*</label>
                        </p>
                        <select id="fnarea" name="fnarea" required className="ip3" ref={fn}>
                            <option value="" hidden disabled selected>Select</option>
                            <option value="fnarea1">Functional Area 1</option>
                            <option value="fnarea2">Functional Area 2</option>
                            <option value="fnarea3">Functional Area 3</option>
                        </select>
                    </div>
                </div>

                {/* Graduating Year */}

                <p>
                    <label for="grad">Graduating Year</label>
                </p>
                <div className="align1">
                    <select name="mingrad" id="grad" className="ip2" ref={minGr}>
                        <option value="" selected disabled hidden>Min Batch</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                    </select>

                    <select name="mingrad" className="ip2" ref={maxGr}>
                        <option value="" selected disabled hidden>Max Batch</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>

                {/* Tags */}

                <p>
                    <label for="tag">Tags</label>
                </p>
                <input type="text" id="tag" className="ip1" placeholder="+ Add job tag" ref={tag}/>

                <div className="btn">
                    <button form="form" type="submit" className="post">Post Job</button>
                    <button form="form" type="submit" className="post2">Post Job and Add Another Job</button>
                    <button onClick={cancelled} className="cancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default PostPage