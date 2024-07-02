import img1 from '../assets/blog-image-1.jpg'
import img2 from '../assets/blog-image-2.jpg'

function Article() {
    return (
        <main>
            <section>
                <article>
                    <time dateTime="11/12/20">
                        11/12/20
                    </time>
                    <h1>
                        On the Street in Brooklyn
                    </h1>
                    <img src={img1} alt="Woman in red dress" />
                    <p>
                        Cray ipsum, dolor sit amet consectetur adipisicing 
                        elit. Repellat quidem deserunt nemo dignissimosfuga 
                        veniam inventore eligendi magnam aperiam odit 
                        mollitia cupiditate eveniet velit officiis magni 
                        aliquid,laborum dolor? Quasi? Veniam amet rerum 
                        ducimus est ea at neque alias. Temporibus 
                        perspiciatis at impedit voluptas aut voluptates 
                        facere totam aliquid debitis rerum, ex consequuntur, 
                        nulla eius quae corrupti optio atque ut. 
                        Repellendus molestiae doloribus recusandae, itaque 
                        voluptatibus placeat repellat deserunt amet eaque 
                        dignissimos, iste sapiente magnam doloremque. 
                        Fugit, cum, cupiditate aliquam, mollitia quisquam 
                        sed nulla eveniet doloribus neque optio odio qui! 
                        Id architecto impedit consequatur rem quaerat 
                        voluptatibus pariatur quas,quod quisquam quo ab 
                        molestiae.
                    </p>
                    <aside id='cont'>
                        <a href="#blog"> Continues ... </a>
                    </aside>
                </article>
            </section>
            <section>
                <article>
                    <time dateTime="11/11/20">
                        11/11/20
                    </time>
                    <h1>
                        Vintage in Vogue
                    </h1>
                    <img src={img2} alt="Group of Models" />
                    <p>
                        Selfies sunt, dolor sit amet consectetur adipisicing 
                        elit. Repellat quidem deserunt nemo dignissimos facere 
                        totam aliquid debitis rerum, ex consequuntur, nulla 
                        eius quae corrupti optio atque ut aliquid,laborum 
                        dolor? Quasi? Veniam amet rerum ducimus est ea at neque
                         alias. Temporibus perspiciatis at impedit voluptas aut
                          voluptates facere totam aliquid debitis rerum, ex 
                          consequuntur, nulla eius quae corrupti optio atque 
                          ut. Repellendus molestiae doloribus recusandae, 
                          itaque voluptatibus placeat repellat deserunt amet 
                          eaque dignissimos, iste sapiente magnam doloremque. 
                          Fugit, cum, cupiditate aliquam, mollitia quisquam sed
                           Fugit, cum, cupiditate aliquam, mollitia quisquam 
                           sed nulla eveniet doloribus neque optio odio qui! 
                           quas,quod quisquam quo ab molestiae.
                    </p>
                    <aside id='cont'>
                        <a href="#blog"> Continues ... </a>
                    </aside>
                </article>
            </section>
        </main>
    )
}

export default Article