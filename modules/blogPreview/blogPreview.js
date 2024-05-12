class BlogPreview{

   
    
    
    /*usar apenas pra ver se classe foi importada*/
    constructor(){
        console.log("BlogPreview  iniciada");  
        this.init();
       
       
    }
    
    
    //inicio
    init(){
        
       return document.getElementById('app').innerHTML+=`

       <section class = 'blogPreview'>
         <div class="box">
                <img id="princ" src="./modules/blogPreview/img/illustration-article.svg"/>

            <div class="boxText">
                <span>Learning</span>
                <p>Published 21 Dec 2023</p>
                <h1>HTML & CSS foundations</h1>
                <h2>These languages are the backbone of every website, defining structure, content, and presentation.</h2>

            </div>

            <div class="autor">
                <img src="./modules/blogPreview/img/image-avatar.webp"/>
                <h3>Greg Hooper</h3>
            </div>
            

         </div>



       </section>


       
       
       
       
       
       
       `
    }





    

}  //fim da classe


export default BlogPreview;