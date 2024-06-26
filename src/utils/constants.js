export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const USER_AVATAR="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfn5oPOIGVSlH36wxaH-5oL5d8wztZgxFQeRq_LSU9RKySbIUMGZ2118vOWyS6Xl3wkKoIHBIknKKSY7YjP3lhLbaaMR3u8.png?r=72f"

  export const BG_PIC="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"

  export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${process.env.REACT_APP_TMDB_KEY}`,
    }
  };
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  
  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];
  
  // export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
