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
        console.log(data)
        const div =document.createElement('div');
        div.innerHTML=`
                        <div class="bg-[#797DFC1A]  p-10 rounded-3xl flex gap-6">
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
                        <h3 class="text-xl text-[#12132D] font-bold">${data.title}</h3>
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
                                    <p>${data.view_count}</p>
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


allPostDataload()