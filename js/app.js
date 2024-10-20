// all post related section
const allPostDataload=async()=>{
    const res =await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const datas=await res.json();
    const data=datas.posts
    // console.log(data)
    showAllpost(data)
}

const showAllpost=(datas)=>{
    const cardSection=document.getElementById('card-section');
    datas.forEach(data => {
        const div =document.createElement('div');
        div.innerHTML=`
                        <div onclick="addTitle()"  class="bg-[#797DFC1A]  p-10 rounded-3xl flex gap-6">
                    <div>
                        <div class="avatar online">
                            <div class="w-24 rounded-full">
                              <img src="${data.image}" />
                            </div>
                          </div>
                    </div>
                    <div class="space-y-5">
                        <div class="flex gap-5 text-base font-medium text-[#12132DCC]">
                            <p>#${data.category}</p>
                            <p>Author : ${data.author.name}</p>
                        </div>
                        <h3 id="page-title" class="text-xl text-[#12132D] font-bold">${data.title}</h3>
                        <p class="text-base text-[#12132D99] font-normal">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                        <hr>
                        <div class="flex justify-between">
                            <div class="flex gap-5 text-base text-[#12132D99] font-normal">
                                <div class="flex">
                                    <img src="images/massage.svg" alt="">
                                    <p>${data.comment_count}</p>
                                </div>
                                <div class="flex">
                                    <img src="images/eye.svg" alt="">
                                    <p id="page-viewer"  >${data.view_count}</p>
                                </div>
                                <div class="flex">
                                    <img src="images/time.svg" alt="">
                                    <p>${data.posted_time}</p>
                                </div>
                            </div>
                            <div><img src="images/email 1.svg" alt=""></div>
                        </div>
                    </div>
                 </div>
        `
        cardSection.appendChild(div)

    });
}

const addTitle=(data)=>{
    const getData=document.getElementById('card-title');
    const getTitle=document.getElementById('page-title').innerText;
    const getviewer=document.getElementById('page-viewer').innerText;
    const div =document.createElement('div');
    div.innerHTML=`
                    <div class="flex justify-between bg-[white] p-3 rounded-3xl">
                    <h3  class="text-base w-3/4 text-[#12132D] font-semibold">${getTitle}</h3>
                    <div class="flex items-center gap-1">
                        <img class="w-5 h-5" src="images/eye.svg" alt="">
                        <p class="text-base text-[#12132D99] font-normal">${getviewer}</p>
                    </div>
                </div>
    `
    getData.appendChild(div)
}
allPostDataload()

// letest post section
const letestPostLoadData=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data =await res.json()
    showLetestData(data)
}

const showLetestData=(datas)=>{
    const letestCard=document.getElementById('letest-card');
    datas.forEach(data=>{
        const div=document.createElement('div')
        div.innerHTML=`
                        <div class="card  w-96 border">
                    <figure>
                      <img
                        src="${data.cover_image}"
                        alt="Shoes" />
                    </figure>
                    <div class="space-y-3 text-start p-6">
                    <div class="flex gap-1 mt-4">
                        <img class="w-6 h-6" src="images/date.svg" alt="">
                        <p class="text-sm font-normal text-[#12132D99]">${data.author.posted_date?data.author.posted_date:'NO publish date'}</p>
                    </div>
                      <h2 class="text-xl text-[#12132D] font-bold">${data.title}</h2>
                      <p class="text-base font-normal text-[#12132D99]">${data.description}</p>
                      <div class="flex gap-1">
                        <img class="w-11 h-11" src="${data.profile_image}" alt="">
                        <div class="">
                            <h3 class="text-base text-[#12132D] font-bold">${data.author.name}</h3>
                            <p class="text-base font-normal text-[#12132D99]">${data.author.designation?data.author.designation:'Unknown'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
        `
        letestCard.appendChild(div)
    })
}
letestPostLoadData()

// nav related section
const navSection=()=>{
    const navTitles=document.getElementsByClassName('nav-title');
    for(const s of navTitles){
        console.log(s.children[0])

        s.addEventListener('mouseover', function(){
            const mainElement=s.children[0];
            mainElement.classList.remove('hidden')
        })
    }
}
navSection()