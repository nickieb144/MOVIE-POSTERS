const allFilm = [
    {
        'id':1,
        title:'MEG3',
        desc:'cole falls head over heels for enigmatic sadie,but then makes the shocking discovery that she is a secret agent',
        image:
        "https://th.bing.com/th/id/OIP.saRaCEcIdHuB1eBh1uTxiQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        year:2023.
    },
    {
        'id':2,
        title:'MERMAID',
        desc:'Ariel,a mermaid with a golden voice,leaves her world under the sea to live on land,with the help of her friends',
        image:
            "https://th.bing.com/th/id/OIP.BYBFWFEcrsKL89KuARU7AgHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2023.  
    },
    {
        'id':3,
        title:'JOHN WICK 3',
        desc:'John wick is declared excommunicado and a hefty bounty is set on him to after he murder an international crime lord',
        image:
            "https://th.bing.com/th/id/OIP.LLVtI0VVXr_z_yHrtbfMYwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2019.  
    },
    {
        'id':4,
        title:'BARBIE',
        desc:'barbie and ken are having the time of their lives in the colorful and seemingly perfect world of barbie land.',
        image:
            "https://th.bing.com/th/id/OIP.ikD1dIz-UkKfvUgLsF4bbAHaJQ?rs=1&pid=ImgDetMain",
            year:2023.  
    },
    {
        'id':5,
        title:'POPEYE',
        desc:'popeye the sailor man is a fictional movie character created by elzie crisler segar.',
        image:
            "https://th.bing.com/th/id/OIP.FflgaAS7jEasngn7h2g4XQHaKX?w=186&h=260&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2022.
    }, 
    {
        'id':6,
        title:'FAIR PLAY',
        desc:'An unexpected promotion at a cutthroat hedge fund pushes a newly engaged couples relationship to the brink',
        image:
            "https://th.bing.com/th?id=OIF.K8D%2bi4dBKl5FlHgBecYu4A&w=155&h=230&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2023.
    },
    {
        'id':7,
        title:'THE GREAT WAR',
        desc:'A group of US army soldiers try to rescue a platoon of African-American soldiers from enemy territory in the first world war',
        image:
            "https://th.bing.com/th/id/OIP.-RJyJIcenPLz9Hi6OYy_rAHaJg?w=186&h=239&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2010.
    }, 
    {
        'id':8,
        title:'USTAAD',
        desc:'Young, aimless surya navigates his life, learning lessons from his master as he comes of age and aspire to be a pilot',
        image:
            "https://th.bing.com/th/id/OIF.lelF6diH6DV1iwMSS8Gytg?w=169&h=212&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2023.
    },
    {
        id:9,
        title:'THE CREATOR ',
        desc:'As a futrue between the human race and artificial intelligence rages on,ex-special forces agent joshua is recruited to hunt down and kill the creator',
        image:
            "https://th.bing.com/th?id=OIF.Byz2P2Uo%2bDbvoHXfulyrvQ&w=186&h=278&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2023.
    },
    {
        id:10,
        title:'AVENGE',
        desc:'Having failed to defeat aquaman the first time,black manta,still driven by the need to avenge his father death',
        image:
            "https://th.bing.com/th?id=OIF.%2ft%2fYySv5aCTnXT1rbbJz8w&w=186&h=276&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            year:2023.
    },
   
    {
    id:10,
    title:'AVENGE',
    desc:'Having failed to defeat aquaman the first time,black manta,still driven by the need to avenge his father death',
    image:
        "https://th.bing.com/th?id=OIF.%2ft%2fYySv5aCTnXT1rbbJz8w&w=186&h=276&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        year:2023.
    },
   
    {
    id:10,
    title:'AVENGE',
    desc:'Having failed to defeat aquaman the first time,black manta,still driven by the need to avenge his father death',
    image:
        "https://th.bing.com/th?id=OIF.%2ft%2fYySv5aCTnXT1rbbJz8w&w=186&h=276&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        year:2023.
    },
];
const filmcont= document.getElementById("moviePoster");
console.log(filmcont);

const createProduct = () => {
    allFilm.map((value, index) => {
      console.log(index);
      const card = `
          <div key=${index} class='card'>
              <img src=${value.image} alt=${value.title} class=''/>
              <button class="btn">Play</button>
              <h1>${value.title}</h1>
               <h5>${value.desc}</h5>
              <small class="ear">${value.year}</small>
             
          </div>
    `;
      filmcont.innerHTML += card;
    });
  };
  createProduct();
  const button= document.getElementById("button");
  const film= document.getElementById("new-card");
  const createProduct2 = () => {
    film.map((moviePoster) => {
      const newCard = document.createElement("div");
      newProducts.appendChild(newCard);
      const image = document.createElement("img");
      image.src = moviePoster.image;
      const title = document.createElement("h2");
      title.innerHTML = moviePoster.title;
      const description = document.createElement("p");
      description.innerHTML = moviePoster.desc;
      const year = document.createElement("p");
      price.innerHTML = moviePoster.year;
      // const play = document.createElement("button");
      // play.innerHTML = "Play";
  
      newCard.appendChild(image);
      newCard.appendChild(title);
      newCard.appendChild(description);
      newCard.appendChild(year);
    //   newCard.appendChild(play);
  
      newCard.className = "card";
  
      newProducts.appendChild(newCard);
    });
  };
  
  createProduct2();
    