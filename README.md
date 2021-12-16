# Project Proposal

**Title**: *My Bubbe Says*
**Concept**: *My Bubbe Says* is a modern archive of American Yiddish words and phrases. 
**User Story**: The goal is to preserve cultural vocabulary for individuals who grew up in the American Jewish community, or for those who just watched a lot of *Seinfeld* at a young age! For Jewish Americans, the official teachers of the Yiddish language are often our grandmothers, *bubbes*, or grandfathers, *zaides*. Thus, *My Bubbe Says* asks its users, "What does your *bubbe* say?" and "What did she mean when she said that?" in order to construct communal knowledge of words that might be otherwise lost or forgotten. Currently, there are not any modern resources online for this type of archive. Many Yiddish translators and dictionaries require a knowledge of the Hebrew alphabet, or a knowledge of phonetic Yiddish spelling structures, or delve into Germanic influence on the language... For American Jews, all we really want, is a place to remember and keep the words and phrases we grew up with. *My Bubbe Says*, "it's a great idea!"


## Site Structure

**Landing Page** will showcase a randomized word from the database. This word will automatically refresh every 5 seconds or so. The word will display along with the definition, example sentence, and phonetic spelling. Underneath, upon scroll, a short blurb explaining the concept will appear. 

**About Page** will showcase Taylor... and her grandmother! 

**Form: Submit a Word Page** a simple form for users to submit words that their *bubbes* say/said. The form will require a user to submit the word, a definition, an example sentence, and their *bubbe's* name. The *bubbe* name is in lieu of a username, email, or individual's name and is a fun way to credit *bubbes*  around the world with their most-used Yiddish words. 

**Search: Find a Word Page** a search bar will allow users to search for a Yiddish word and find it's definition, pronunciation (phonetic spelling), and an example sentence. 

**Dictionary: See All Words Page** a "view all" page will allow users to browse all Yiddish words currently in the *My Bubbe Says* database.  


## Important Functionality
- Timed Slideshow, of randomized words from the database. (Landing Page), Post-MVP
- Form, for a user to submit a word to be displayed, after approval, on the site. (Form Page), MVP
- Search Bar, for a user to search for words on the site (Search Page), MVP
- Nav Bar, for a user to navigate between pages (All Pages), Post-MVP
- Django Database, to store all words (Back End), MVP
- Admin Control, to control which words are approved or not (Back End), Post-MVP

## Plan
- Front-End: HTML, CSS, JavaScript, React App 

- Back-end: Django, Python API 
    - Models: Words, User* 

*Note there will only be one user, which is me, Taylor, the Admin. No other users allowed.

Example word model in the *My Bubbe Says* backend database. 
```py
{
  "id": 1,
  "word": "verklempt",
  "alternate_spelling": ["verklempt"]
  "phonetic_spelling": "fur-clem-tuh",
  "definition": "overwhelmed",
  "example_sentence": "My bubbe was a little verklempt when she heard the news: her only daughter was to marry a doctor.",
  "bubbe_author": "Gussie Ratner",
  "approved": true 
}
{
  "id": 2,
  "word": "zadie",
  "alternate_spelling": ["zadie", "zayde", "zaydie", "zaydeh", "zaide"]
  "phonetic_spelling": "zay-dee",
  "definition": "grandfather",
  "example_sentence": "Even though Zadie can't hear very well anymore, somehow he still knows when I'm trying to steal a bite of his precious gefilte fish out of the jar.",
  "bubbe_author": "Gussie Ratner",
  "approved": true 
}
```

## Wireframes 

- Landing Page and Nav Bar [here](https://res.cloudinary.com/overturf/image/upload/v1639677167/landingpageandnavbar.heic). 
- 'Submit a Word' and 'Search a Word' [here](https://res.cloudinary.com/overturf/image/upload/v1639677151/submitandsearchpages.heic). 
