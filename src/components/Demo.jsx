import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick} from "../assets";
import { useLazyGetSummaryQuery } from '../services/article';


const demo = () => {
    const [article, setArticle] = useState({url:'', summary:''});
    const [allArticles, setAllArticles] = useState allArticles([]);
    
    const [getSummary, { error, isFetching }]  = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles');
        )
        if(articlesFromLocalStorage){
            setAllArticles(articlesFromLocalStorage)
        }

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const { data } = await getSummary({
            articleUrl: article.url
        });
        if(data?.summary){
            const newArticle = { ...article, summary: data.summary};
            
            const updateAllArticles = [newArticle, ...allArticles ]
            
            setArticle(newArticle);
            setAllArticles(updateAllArticles);

            localStorage.setItem('articles', JSON.stringify(updateAllArticles))

            console.log(newArticle);
        }
    }


  return (
    <section className='mt-16 w-full max-w-xl gap-2'>
        {/* Seach */}
        <div className='flex flex-col '>
            <form 
            className='relative flex justify-center items-center'
            onSubmit={handleSubmit}>
                <img 
                src={linkIcon} 
                alt="link_icon"
                className='absolute left-0 my-2 ml-3 w-5' 
                />
                <input 
                type="url" 
                placeholder='Enter a URL'
                value={article.url}
                onChange={(e) => setArticle({ ...article, url: e.target.value })}
                required
                className='url_input peer'

                />
                <button
                type='submit'
                className='submit_btn
                peer-focus:border-gray-500
                peer-focus:text-gray-700'
                >
                    Enter
                </button>
            </form>
        {/*  Browse URL History */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
            {allArticles.map((item, inddex) => (
                <div
                key={`link-${index}`}
                onClick={() => setAllArticle(item)}
                className='link_card'>
                    <div className='copy_btn'>
                        <img 
                        src={copy} 
                        alt="copy_icon" 
                        className='w-[40%] h-[40%] object-contain'/>
                    </div>
                    <p className='flex-1 font-satoshi text-blate-700 font-medium text-sm truncate '>
                        {item.url}
                    </p>

                </div>
            ))}
        </div>
        </div>
        {/* Display Results */}
        <div className='my-10 max-w-full flex justify-center items-center '>
            {isFetching?(
                <img 
                src={loader} 
                alt="loader"
                className='w-20 h-20 object-contain' />
            ) : error ? (

                <p className='font-inter font-bold text-black text-center'>
                   Well, that wasn't supposed to happen..
                   <br/>
                   <span className='font-satoshi font-normal text-slate-700'>
                    {error?.data?.error}
                   </span>
                </p>
            ) : (
                article.summary && (
                    <div className='flex flex-col gap-3 '>
                        <h2 className='font-satoshi font-bold text-slate-700 text-xl'>
                            Article <span className='orange_gradient'>Summary</span>
                        </h2>
                        <div className='summary_box'>
                            <p className='font-inter font-medium text-sm text-slate-600 '>
                                {article.summary}
                            </p>
                        </div>
                    </div>
                )
            ) }
        </div>
    </section>
  )
}

export default demo