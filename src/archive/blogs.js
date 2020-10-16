// // import React from 'react';
// // // import Navbar from '../components/navbar.js'
// // import './home.css'
// // import { Link } from 'react-router-dom';
// // import Navbar from '../components/navbar'
// // import './blogs.css'
// // // import Post from '../components/post'
// // // const ReactMarkdown = require('react-markdown')



// function Body(props){

//     const renderPost = postings=>{
//         return (
//             <li><Post title={postings.title} content={postings.content} displayPic={postings.dp} galleryImages={postings.images} bckgcolor={postings.section}/></li>
//         )

//     }
//     const renderPostButtons=postings=>{
//         return(
//             <div style={{backgroundColor: postings.section}}>
//                 {postings.title}
//                 <div 
//                 // className="PostName"
//                 >{postings.title}</div>
//                 <div 
//                 // className="ImagePost" 
//                     style={{"backgroundImage":`url(${props.displayPic})`}}/> 
//             </div>
//         )
//     }

//     return(
//         <div className="Body">
//             <div className="LeftMenu">
//                 {/* <ul> */}
//                 { 
//                     (props.posts && props.posts.length>0)?(
//                     props.posts.map((postings)=>renderPostButtons(postings))
//                     ):(
//                         <p> no posts </p>
//                     )
//                 }
//                 {/* </ul> */}
//             </div>
//             <div className="Posts">
//                 <ul>
//                     {/* <li> <Post title="Gokarna" content="As the computing field enlarges and we get better, faster and more efficient hardware we also should be able to devise efficient techniques to utilise them to their fullest extent. In the current workings, cluster computing for workstations is increasingly becoming popular and hence discussing and developing efficient software to utilise these resources is a key challenge. 

// Initially while most cluster computing were developed by private companies such as IBM and HP , linux based clusters are becoming increasingly popular now. Such clusters need to come up with many distributed/parallel based software for efficient resource utilization e.g. existing file systems are not designed to work on clusters efficiently. Hence this paper introduces the open source Parallel Virtual File Systems (PVFS) for linux clusters.

// The paper discusses the requirements and needs for such a system followed by its design and implementation along with other file system interfaces. It also works on making it easy to move and install PVFS without having to recompile the kernel. Later it does a brief comparison on heavy read writes with a regular file system to show extremely good results with the tremendous speed up in file access.
// " displayPic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.grabon.in%2Fwp-content%2Fuploads%2F2015%2F12%2FGokarna-beach.jpg&f=1&nofb=1" galleryImages={["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthrillingtravel.in%2Fwp-content%2Fuploads%2F2015%2F08%2F1-IMG_2818-1-1024x683.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.visiit.com%2Fwp-content%2Fuploads%2F2018%2F11%2FGokarna-Beach.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.transindiatravels.com%2Fwp-content%2Fuploads%2Fgokarna-beach-640x330.jpg&f=1&nofb=1"]} bckgcolor="teal"/>
//                     </li> 
//                     <li> <Post title="Gokarna" content="As the computing field enlarges and we get better, faster and more efficient hardware we also should be able to devise efficient techniques to utilise them to their fullest extent. In the current workings, cluster computing for workstations is increasingly becoming popular and hence discussing and developing efficient software to utilise these resources is a key challenge. 

// Initially while most cluster computing were developed by private companies such as IBM and HP , linux based clusters are becoming increasingly popular now. Such clusters need to come up with many distributed/parallel based software for efficient resource utilization e.g. existing file systems are not designed to work on clusters efficiently. Hence this paper introduces the open source Parallel Virtual File Systems (PVFS) for linux clusters.

// The paper discusses the requirements and needs for such a system followed by its design and implementation along with other file system interfaces. It also works on making it easy to move and install PVFS without having to recompile the kernel. Later it does a brief comparison on heavy read writes with a regular file system to show extremely good results with the tremendous speed up in file access.
// " displayPic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.grabon.in%2Fwp-content%2Fuploads%2F2015%2F12%2FGokarna-beach.jpg&f=1&nofb=1" galleryImages={["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthrillingtravel.in%2Fwp-content%2Fuploads%2F2015%2F08%2F1-IMG_2818-1-1024x683.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.visiit.com%2Fwp-content%2Fuploads%2F2018%2F11%2FGokarna-Beach.jpg&f=1&nofb=1","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.transindiatravels.com%2Fwp-content%2Fuploads%2Fgokarna-beach-640x330.jpg&f=1&nofb=1"]} bckgcolor="teal"/>
//                     </li>  */}
               
//             {console.log(props.posts)}
//                 { 
//                     (props.posts && props.posts.length>0)?(
//                     props.posts.map((postings)=>renderPost(postings))
//                     ):(
//                         <p> no posts </p>
//                     )
//                 }
//                     {/* <li><Post title="Gokarna" 
//                         content="lmao"
//                     /></li>
//                      <li><Post title="Goa" 
//                         content=
//                         "yo whats up dman."
//                     /></li> */}

//                 </ul>
//             </div>


//         </div>
//     )
// }
// function Blogs(props){
//     return(
//         <div className="Blogs">
//             <Navbar/>
//             <Body section={props.section} posts={props.posts} />
//         </div>
//     )

// }

// export default Blogs