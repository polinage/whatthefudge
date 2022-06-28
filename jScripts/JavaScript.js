var slideIndex = 0;
showSlides(slideIndex);

// פונקציה לחצים
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// פונקציה לתמונות הקטנות
function currentPhoto(n) {
    showSlides(slideIndex = n);
}

// הפונקציה הראשית
function showSlides(n) {
    var photos = document.getElementsByClassName("bigPhoto"); //משתנה לתמונה הגדולה
    var thumbnails = document.getElementsByClassName("smallPhoto"); //משתנה לתמונות הקטנות 
    var captionText = document.getElementById("caption"); //משתנה לכותרת של התמונה

    if (n >= photos.length) {  
        slideIndex = 0; //אם מספר התמונה הגיע ל-6, תחזור לתמונה הראשונה
    }
    if (n < 0) {  
        slideIndex = photos.length - 1; // אם המשתמש לחץ הקודם בתמונה הראשונה, תחזיר אותו לסוף
    }
    for (i = 0; i < photos.length; i++) { 
        photos[i].style.display = "none"; // תעבור על כל התמונות ותסתיר אותן
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", ""); // תחליף את class " active" בריק
    }
    photos[slideIndex].style.display = "block"; // תציג את התמונה הנוכחית
    thumbnails[slideIndex].className += " active"; //  class " active" תוסיך לתמונה הקטנה
    captionText.innerHTML = thumbnails[slideIndex].alt; // הערך של הכותרת שווה לערך של ה-alt של התמונה
}


