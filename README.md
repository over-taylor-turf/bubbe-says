# Project Proposal

**Title**: *My Bubbe Says*

**Concept**: *My Bubbe Says* is a modern archive of American Yiddish words and phrases. 

**User Story**: The goal is to preserve cultural vocabulary for individuals who grew up in the American Jewish community, or for those who just watched a lot of *Seinfeld* at a young age! For Jewish Americans, the official teachers of the Yiddish language are often our grandmothers, *bubbes*, or grandfathers, *zaides*. Thus, *My Bubbe Says* asks its users, "What does your *bubbe* say?" and "What did she mean when she said that?" in order to construct communal knowledge of words that might be otherwise lost or forgotten. Currently, there are not any modern resources online for this type of archive. Many Yiddish translators and dictionaries require a knowledge of the Hebrew alphabet, or a knowledge of phonetic Yiddish spelling structures, or delve into Germanic influence on the language... For American Jews, all we really want, is a place to remember and keep the words and phrases we grew up with. *My Bubbe Says*, "it's a great idea!"


## Site Structure

**Landing Page** showcases a randomized word from the database. This word automatically refreshes every 5 seconds to display a new Yiddish word. The word itself displays along with the definition, example sentence, and phonetic spelling.


**About Page** showcases Taylor... and her bubbe! Along with appropriate links and a "secret game" page, which is accessible at the bottom right corner in hebrew lettering: סוד שפּיל
![about page](https://res.cloudinary.com/overturf/image/upload/v1640216254/About_Page_hhkrpq.png)

**Secret Game** a secrect Yiddish guessing game! Oy vey! Guess the correct word based on the proposed definition. 


**Dictionary: See All Words Page** a "view all" page will allow users to browse all Yiddish words currently in the *My Bubbe Says* database.  


**Submit a Word Page** a simple form for users to submit words that their *bubbes* say/said. The form will require a user to submit the word, a definition, an example sentence, and their *bubbe's* name. The *bubbe* name is in lieu of a username, email, or individual's name and is a fun way to credit *bubbes*  around the world with their most-used Yiddish words. Currently connected to a Google Spreadsheet. 


**Find a Word Page** a search bar will allow users to search for a Yiddish word and find it's definition, pronunciation (phonetic spelling), and an example sentence. 




## Functionality
- Timed Slideshow, of randomized words from the database. (Landing Page) ✅
- Form, for a user to submit a word to be displayed, after approval, on the site. (Form Page), MVP ✅
- Search Bar, for a user to search for words on the site (Search Page), MVP ✅
- Nav Bar, for a user to navigate between pages (All Pages), MVP ✅
- Simple Yiddish guessing game, Post-MVP ✅
- Django Database, to store all words (Back End), Post-MVP 🛠
- Admin Control, to control which words are approved or not (Back End), Post-MVP 🛠

## Plan
✅ Currently:
- Front-End: HTML, CSS, JavaScript, React App 

🛠 In Progress: 
- Back-end: Django, Python API 
[Back-end Repo](https://github.com/over-taylor-turf/yiddish-words) to be used in lieu of the Google Spreadsheet for the submit form (will populate "suggested words" data) and word data currently in front-end (will populate "approved words").

Example word data in the *My Bubbe Says*: 
```py
    {
        id: 0,
        word: "bupkis",
        phonetic_spelling: "bup-KISS",
        definition: "nothing, nada",
        example_sentence: "You know how much they pay their interns? That's right, you guessed it: bupkis.",
        bubbe: "Gussie Ratner"
    },
    {
        id: 1,
        word: "chutzpah",
        phonetic_spelling: "HOOTS-puh",
        definition: "confidence, audacity, nerve",
        example_sentence: "Can you believe she had the chutzpah to show up to this bat mitzvah?",
        bubbe: "Gussie Ratner"
    },
```

## Wireframes 

- Landing Page and Nav Bar [here](https://res.cloudinary.com/overturf/image/upload/v1639677167/landingpageandnavbar.heic). 
- 'Submit a Word' and 'Search a Word' [here](https://res.cloudinary.com/overturf/image/upload/v1639677151/submitandsearchpages.heic). 
