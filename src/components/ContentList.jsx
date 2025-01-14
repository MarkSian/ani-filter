import Button from './Button'
export default function ContentList() {
    return (
        <>
        <div className="card center-container bg-slate-100/5 card-compact mt-4 bg-base-100 w-96 shadow-xl">
            <figure className="aspect-[16/9]">
                <iframe className="w-full h-full" width="1044" height="587" src="https://www.youtube.com/embed/UXQUC9_SeM4" title="DNBA Live | DNVR Nuggets Podcast" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold cursor-pointer">Anime Title</h2>
                <p className="text-lg font-thin">2019 · 2h 3min · ⭐ 6.9/10</p>
           
            <div className="mt-2 flex space-x-2">
                <div className="badge badge-accent">accent</div>
                <div className="badge badge-accent">accent</div>
            </div>

                <p className="text-sm font-thin mt-2">Anime Description Anime Description Anime Description Anime Description Anime Description Anime Description Anime Description</p>
                
                <div className="flex justify-between mt-3">
                    <Button text={"Back"}/>
                    <Button text={"Hide"}/>
                    <Button text={"Next"}/>

                </div>
            </div>
        </div>

        
        </>
    )
}