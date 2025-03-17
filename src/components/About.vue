<template>
    <div class="content-container">
      <h1>About PurplWav</h1>
      <p>
        PurplWav is dedicated to raising awareness about epilepsy and providing support to those affected by it.
        Started in 2016 by mother and daughter Melike and Dilara as a way of supporting son and younger brother Aydin,
        who has drug-resistant epilepsy, PurplWav has grown into a much larger campaign that works with local nonprofits
        to provide information and resources to those affected by the disease.
      </p>
  
      <div class="video-container">
        <iframe width="480" height="315" src="https://www.youtube.com/embed/lsITWSdajf8?si=LuFMenVeOXdkHXvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="480" height="315" src="https://www.youtube.com/embed/IPIBJeWye3Y?si=3y9MKuqav2bu9wbP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
  
      <h2>Meet the Team</h2>
      <div class="team-member">
        <img src="@/assets/Melike.jpg" alt="Melike" class="team-photo" />
        <p>
          Melike Ceylan-Leamen is the co-founder of PurplWav. She has been actively involved in raising awareness about
          epilepsy and providing support to those affected by it.
        </p>
      </div>
      <div class="team-member">
        <img src="@/assets/Dilara.jpg" alt="Dilara" class="team-photo" />
        <p>
          Dilara Leamen is the co-founder of PurplWav. She works closely with local nonprofits to provide information and
          resources to those affected by epilepsy.
        </p>
      </div>
      <div class="team-member">
        <img src="@/assets/Aydin.jpg" alt="Aydin" class="team-photo" />
        <p>
          Aydin Leamen is the inspiration behind PurplWav. Despite his drug-resistant epilepsy, he continues to inspire
          others with his resilience and strength.
        </p>
      </div>
      <div class="team-photos">
        <img src="@/assets/CNTower.jpg" alt="Aydin and Dilara" />
        <img src="@/assets/Recording.jpg" alt="Melike and Aydin" />
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .video-container {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .team-photos {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .team-photos img {
    max-width: 45%;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 2em;
    margin-top: 40px;
    color: #333;
  }
  
  .team-member {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .team-photo {
    width: 150px;
    aspect-ratio: 1 / 1; /* Ensures perfect square */
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: block;
  }
  
  .team-member p {
    font-size: 1em;
    line-height: 1.5;
    color: #555;
  }
  </style>