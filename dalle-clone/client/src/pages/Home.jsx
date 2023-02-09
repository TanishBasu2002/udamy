import React,{useState,useEffect} from 'react'
import { Card,FormField,Loader} from '../components'
const RenderCards = ({data,title})=>{
    if (data?.length > 0) {
        return (data.map((post)=><Card key={post._id}{...post}></Card>))
    }
    else {return(
        <h2 className='mt-5 font-bold text-[#6449ff] text-x1 uppercase'>
        {title}
        </h2>
    )}
}
const Home = () => {const[loading, setLoading] = useState(false);
    const[allPosts, setAllPosts] = useState(null);
    const [searchtext, setsearchtext] = useState('');
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Browse through a collection of photos</p>
    </div>
    <div className="mt-16">
        <FormField/>
    </div>
    <div className="mt-10">
        {
            loading ? (
                <div className="flex justify-center items-center">
                    <Loader/>
                </div>
            ): (<>
                {searchtext &&(
                    <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                        Showing Results from <span className='text-[#222328]'>
                        {searchtext}
                        </span>
                    </h2>
                )}
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                    {searchtext ? (<RenderCards data={[]} title="No search results found"/>):(<RenderCards data={[]} title="No posts found"/>)}
                </div>
            </>)}
            
        
    </div>
        </section>
    )}
    
    
 

export default Home
