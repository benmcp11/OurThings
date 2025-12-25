import React, { useState, useRef, useEffect } from "react";
import "./Connections.css";

const Connections = () => {
  // const [items, setItems] = useState([
  //   { text: "FIRST", status: "" },
  //   { text: "SECOND", status: "" },
  //   { text: "THIRD", status: "" },
  //   { text: "POST", status: "" },
  //   { text: "PRICE", status: "" },
  //   { text: "SELL", status: "" },
  //   { text: "DOVE", status: "" },
  //   { text: "HA", status: "" },
  //   { text: "FOREVER", status: "" },
  //   { text: "BEER", status: "" },
  //   { text: "ONE", status: "" },
  //   { text: "HURRICANE", status: "" },
  //   { text: "HAT", status: "" },
  //   { text: "BOOTS", status: "" },
  //   { text: "LASSO", status: "" },
  //   { text: "SADDLE", status: "" },
  // ]);

    // useEffect(() =>{
  //   setItems([...items.sort(() => Math.random() - 0.5)]);
  // },[]);


  const [selectedItems, setSelectedItems] = useState([]);
  const [solvedGroups, setSolvedGroups] = useState([]);
  const [mistakes, setMistakes] = useState(4);
  const [message, setMessage] = useState("");

  const refs = useRef([]);

  // const categories = [
  //   { name: "STAGES OF PREGNANCY", group: ["FIRST", "SECOND", "THIRD", "POST"], color: "yellow" },
  //   { name: "COUNTRY ESSENTIALS", group: ["HAT", "BOOTS", "LASSO", "SADDLE"], color: "green" },
  //   { name: "FIRST WORD OF LUKE COMB'S SONGS", group: ["FOREVER", "BEER", "ONE", "HURRICANE"], color: "blue" },
  //   { name: "NICKNAMES WITHOUT THE LAST LETTER", group: ["PRICE", "DOVE", "SELL", "HA"], color: "purple" },
  // ];

  const [items, setItems] = useState([]);

  // const categories = [
  //   { name: "BORN IN MAY", group: ["KEVIN", "CIARA", "SOPHIE", "PAT"], color: "blue" },
  //   { name: "COUNTRY SINGERS", group: ["LUKE", "DOLLY", "CARRIE", "GARTH"], color: "yellow" },
  //   { name: "____ SELFRIDGE", group: ["EMMA", "MICHAEL", "PAUL", "MAUREEN"], color: "green" },
  //   { name: "TEACHERS (TO BE)", group: ["KAREN", "NIAMH", "REBECCA", "VICTORIA"], color: "purple" },
  // ];

  // const categories = [
  //   { name: "TERMS IN VAMPIRE DIARIES", group: ["HYBRID", "COMPEL", "ORIGINALS", "DOPPELGANGER"], color: "green" },
  //   { name: "SONGS FROM MATILDA", group: ["BRUCE", "MIRACLE", "NAUGHTY", "QUIET"], color: "purple" },
  //   { name: "GREY'S CHARACTERS", group: ["GREY", "SHEPHERD", "HUNT", "AVERY"], color: "blue" },
  //   { name: "DISNEYLAND PARKS", group: ["ANIMAL", "MAGIC", "HOLLYWOOD", "EPCOT"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "MIDDLE NAME PATRICK", group: ["BEN", "KEVIN", "KALEN", "JAKE"], color: "blue" },
  //   { name: "BORN IN JANUARY", group: ["CARLY", "NIAMH", "ORLAGH", "NOLEEN"], color: "green" },
  //   { name: "MCPARTLIN SISTERS", group: ["ANN", "THERESA", "MARIE", "JEANETTE"], color: "yellow" },
  //   { name: "TWO OF A KIND", group: ["PAUL", "EMMA", "PATRICK", "NICHOLA"], color: "purple" },
  // ];

  // const categories = [
  //   { name: "BORN IN DECEMBER", group: ["HARRY", "DANIEL", "ANDREW", "ANDERSON"], color: "blue" },
  //   { name: "AUNTIES (IN-LAW)", group: ["NICKY", "ALISSON", "NICHOLA", "LEASHA"], color: "green" },
  //   { name: "CELTIC PLAYERS", group: ["CALLUM", "LUKE", "GREG", "REO"], color: "yellow" },
  //   { name: "(FORMER) GLASGOW UNI STUDENTS", group: ["BEN", "ERIN", "KAREN", "NIAMH"], color: "purple" },
  // ];

  // const categories = [
  //   { name: "(HOMOPHONES OF) DISNEY CHARACTERS", group: ["BELL", "ARIEL", "JASMINE", "CINDY"], color: "purple" },
  //   { name: "JERSEY BOYS SONGS", group: ["SHERRY", "DAWN", "BEGGIN", "RAG DOLL"], color: "green" },
  //   { name: "STUDIED AT UNI", group: ["MIDWIFERY", "ELECTRONICS", "ECONOMICS", "DENTISTRY"], color: "yellow" },
  //   { name: "A COSY DAY IN", group: ["LEGO", "COLOURING", "CROCHET", "PHOTOS"], color: "blue" },
  // ];

  // const categories = [
  //   { name: "WORK FOR A BANK", group: ["BEN", "KEVIN", "CIARA", "NICOLA"], color: "blue" },
  //   { name: "MARCH BIRTHDAYS", group: ["ERIN", "AIDAN", "RORY", "BELLA"], color: "green" },
  //   { name: "(FORMER) UWS STUDENTS", group: ["CARLY", "NIAMH", "PATRICK", "JAKE"], color: "purple" },
  //   { name: "PRISON BREAK CHARACTERS", group: ["MICHAEL", "LINCOLN", "SARA", "THEODORE"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "VAMPIRE DIARIES BEINGS", group: ["VAMPIRE", "WEREWOLF", "HUMAN", "HYBRID"], color: "yellow" },
  //   { name: "WICKED SONGS (FIRST WORD)", group: ["POPULAR", "DEFYING", "WIZARD", "DANCING"], color: "purple" },
  //   { name: "YOUR LEGO", group: ["POLAROID", "BABY YODA", "FLOWERS", "ROSES"], color: "blue" },
  //   { name: "SEEN IN PRISON BREAK", group: ["PRISON", "MAP", "ESCAPE", "TATTOO"], color: "green" },
  // ];

  // const categories = [
  //   { name: "BORN IN NOVEMBER", group: ["JAKE", "JENNY", "B", "REBECCA"], color: "green" },
  //   { name: "BESPECTCALED PEOPLE", group: ["BEN", "KEVIN", "CIARRA", "EWAN"], color: "purple" },
  //   { name: "KEV'S PALS (BIEBER, COXY, SCOTIA, PIE)", group: ["DAVID", "COLIN", "SCOTT", "PAUL"], color: "blue" },
  //   { name: "GREY'S ANATOMY", group: ["DEREK", "MEREDITH", "GEORGE", "CRISTINA"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "ONE DIRECTION MEMBERS", group: ["HARRY", "LIAM", "LOUIS", "NIALL"], color: "green" },
  //   { name: "ERIN'S PALS", group: ["MHAIRI", "CAITLIN", "ABBIE", "BRODIE"], color: "blue" },
  //   { name: "JULY BIRTHDAYS", group: ["BEN", "KAREN", "LUCY", "EMMA"], color: "purple" },
  //   { name: "GAVIN AND STACEY CHARACTERS", group: ["PAM", "DAWN", "DORIS", "GWEN"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "GREY'S ANATOMY", group: ["IT'S A BEAUTIFUL DAY TO SAVE LIVES", "I’M A GREY. I BOUNCE BACK", "DON'T BE SORRY, BE BETTER", "PICK ME, CHOOSE ME, LOVE ME"], color: "green" },
  //   { name: "VAMPIRE DIARIES", group: ["REBEKAAAAHH", "HELLO, BROTHER", "I'M NOT SORRY", "I WILL ALWAYS CHOOSE YOU"], color: "blue" },
  //   { name: "YOU AND ME", group: ["APPARENTLY I'VE NEVER BEEN ON LIVE TELEVISION BEFORE", "YUS", "1,2,3", "I'M OKAY. YOU OKAY?"], color: "purple" },
  //   { name: "GAVIN AND STACEY CHARACTERS", group: ["THAT'S WELL LUSH!", "AND I WON'T LIE TO YOU!", "OH, TIDY!", "WHAT'S OCCURRIN'"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "CELTIC PLAYERS", group: ["ANTHONY", "ALISTAIR", "PAOLO", "CAMERON"], color: "green" },
  //   { name: "VAMPIRE DIARIES CHARACTERS", group: ["TYLER", "BONNIE", "MATT", "CAROLINE"], color: "yellow" },
  //   { name: "COUSINS WITH A DIFFERENT SURNAME", group: ["JACK", "MILLIE", "LAURA", "DANIEL"], color: "purple" },
  //   { name: "MARRIED A MURPHY", group: ["DOROTHY", "GORDON", "KAREN", "NICKY"], color: "blue" },
  // ];

  // const categories = [
  //   { name: "ONE NUMBER AWAY", group: ["PRAYING THAT IT RINGS?", "WELL, IF YOU'RE ANYTHING LIKE ME", "AND I'M [SONG TITLE] FROM CALLING YOU", "BUT I JUST WANNA HEAR YOUR VOICE"], color: "green" },
  //   { name: "WHEN IT RAINS IT POURS", group: ["BITCHIN' AND MOANIN' ON AND ON", "EX FUTURE MOTHER IN LAW ANYMORE", "WAS A FOUR DAY THREE NIGHT BEACH VACATION", "THEN I WON 100 BUCKS ON A SCRATCH-OFF TICKET"], color: "yellow" },
  //   { name: "1, 2 MANY", group: ["FIVE, FOUR, THREE, TWO, ONE", "AFTER FIVE DIET MILLERS I WAS FEELING LOOSE", "SO WHAT YOU SAY WE SHOTGUN ONE?", "BY HALF PAST TEN I'M HALF PAST TIPSY"], color: "blue" },
  //   { name: "BETTER TOGETHER", group: ["A 40 HP JOHNSON ON A FLAT BOTTOM METAL BOAT", "SOMETIMES WE'RE OIL AND WATER", "AND ME, AS LONG AS YOU'RE RIGHT HERE", "YOUR LICENSE IN MY WALLET WHEN WE GO OUT DOWNTOWN"], color: "purple" },
  // ];

  //   const categories = [
  //   { name: "TEA ESSENTIALS", group: ["TEA-BAG", "MILK", "WATER", "MUG"], color: "green" },
  //   { name: "TRANSFORMED INTO IN BEAUTY AND THE BEAST", group: ["BEAST", "CLOCK", "CANDLE", "WARDROBE"], color: "purple" },
  //   { name: "MURPHY WORK LOCATIONS", group: ["HOSPITAL", "DENTIST", "SCHOOL", "BANK"], color: "yellow" },
  //   { name: "HARY STYLES SONGS", group: ["KIWI", "MATILDA", "FALLING", "GOLDEN"], color: "blue" },
  // ];

  // const categories = [
  //   { name: "HARRY STYLES", group: ["SHE WORKED HER WAY THROUGH A CHEAP PACK OF CIGARETTES", "JUST STOP YOUR CRYING", "TASTES LIKE STRAWBERRY ON A SUMMER' EVENING", "HOLDIN' ME BACK"], color: "blue" },
  //   { name: "WICKED", group: ["I NEVER ASKED FOR THIS OR PLANNED IT IN ADVANCE", "HANDS TOUCH, EYES MEET", "I HOPE YOU'RE HAPPY", "DEAREST DARLINGEST MOMSIE AND POPSICAL"], color: "purple" },
  //   { name: "LUKE COMBS", group: ["HER DAY STARTS WITH A COFFEE AND ENDS WITH A WINE", "SEVENTEEN YOU DON'T THINK MUCH ABOUT LIFE", "WELL, I GOT A ROWDY CALL 'ROUND 6 O'CLOCK", "WE'VE BEEN BURNIN' BOTH ENDS"], color: "green" },
  //   { name: "ABBA", group: ["FRIDAY NIGHT AND THE LIGHTS ARE LOW", "I DON'T WANNA TALK", "I'VE BEEN CHEATED BY YOU SINCE I DON'T KNOW WHEN", "PEOPLE EVERYWHERE"], color: "yellow" },
  // ];

  //    const categories = [
  //   { name: "VAMPIRE DIARIES", group: ["DAMON", "STEFAN", "ELENA", "KATHERINE"], color: "yellow" },
  //   { name: "KAREN'S PALS", group: ["ANGELA", "SUZANNE", "MHAIRI", "HELEN"], color: "green" },
  //   { name: "WORK IN PUBLIC SECTOR", group: ["KAREN", "NOLEEN", "HARRY", "PAT"], color: "blue" },
  //   { name: "SEEN SCOTLAND AT THE EUROS", group: ["BEN", "GORDON", "EWAN", "LAURA"], color: "purple" },
  // ];

  // const categories = [
  //   { name: "TRAITORS' CONTESTANTS", group: ["ARMANI", "LINDA", "CHARLOTTE", "FOZIA"], color: "green" },
  //   { name: "UNMARRIED AUNTIES/UNCLES", group: ["BELLA", "PAUL", "MICHAEL", "MARIE"], color: "blue" },
  //   { name: "BEN'S COUSINS", group: ["COLETTE", "HEATHER", "SEAN", "MATTHEW"], color: "purple" },
  //   { name: "GRANDPARENTS", group: ["PATRICK", "JOHN", "DOROTHY", "MAUREEN"], color: "yellow" },
  // ];


  // const categories = [
  //   { name: "UNI GIRLS", group: ["MOLLY", "CIARRA", "KIRSTEN", "ADELE"], color: "green" },
  //   { name: "BEN'S GRANDPARENTS", group: ["PATRICK", "JEANETTE", "BRENDA", "CHRISTOPHER"], color: "purple" },
  //   { name: "OUR GIRL CHARACTERS", group: ["GEORGIE", "ELIVIS", "NAFULA", "JAMIE"], color: "blue" },
  //   { name: "CELTIC PLAYERS", group: ["NICK", "CAM", "KASPER", "LIAM"], color: "yellow" },
  // ];

  // const categories = [
  //   { name: "FIRST WORD OF FILMS", group: ["BEAUTY", "LIFE", "GREATEST", "LION"], color: "purple" },
  //   { name: "FOOTBALL FUNDAMENTALS", group: ["BALL", "BOOTS", "POST", "CROSSBAR"], color: "yellow" },
  //   { name: "FOUND ON ME", group: ["GLASSES", "HAIRSPRAY", "HOODIE", "WATCH"], color: "blue" },
  //   { name: "FIRST WORD OF LUKE COMBS' SONGS", group: ["BEAUTIFUL", "WHEN", "FAST", "BETTER"], color: "green" },
  // ];

  // const categories = [
  //   { name: "WHAT MAKES YOU BEAUTIFUL", group: ["YOU'RE INSECURE", "BABY YOU LIGHT UP MY WORLD LIKE NOBODY ELSE", "YOU DON'T KNOW YOU'RE BEAUTIFUL", "RIGHT NOW I'M LOOKING AT YOU AND I CAN'T BELIEVE"], color: "blue" },
  //   { name: "NIGHT CHANGES", group: ["GOIN' OUT TONIGHT, CHANGES INTO SOMETHIN RED", "DOES IT EVER DRIVE YOU CRAZY", "WE'RE ONLY GETTIN OLDER BABY", "IT WILL NEVER CHANGE, BABY"], color: "yellow" },
  //   { name: "HISTORY", group: ["YOU GOTTA HELP ME, I'M LOSIN MY MIND", "ALL OF THE RUMOURS, ALL OF THE FIGHTS", "MINIBARS, EXPENSIVE CARS", "WE COULD BE THE GREATEST TEAM THAT THE WORLD HAS EVER SEEN"], color: "purple" },
  //   { name: "BEST SONG EVER", group: ["AND WE DANCED ALL NIGHT TO ...", "I THINK IT WENT OH,OH,OH", "MAYBE IT'S THE WAY SHE WALKED", "BUT SHE KISSED ME LIKE SHE MEANT IT"], color: "green" },
  // ];

  //   const categories = [
  //   { name: "FAJITA FILLINGS", group: ["WRAP", "CHICKEN", "PEPPERS", "PERRINAISE"], color: "blue" },
  //   { name: "HOLIDAY DESTINATIONS", group: ["TURKEY", "BERLIN", "FLORIDA", "PORTUGAL"], color: "yellow" },
  //   { name: "DATE NIGHTS", group: ["RESTAURANT", "PUB", "KARAOKE", "GUESS THE ..."], color: "purple" },
  //   { name: "SUNDAY LUNCH", group: ["PATE", "STRAWBERRIES", "CRISPS", "CHEESE"], color: "green" },
  // ];

  // const categories = [
  //   { name: "COUNTRY", group: ["SCOTLAND", "LUKE COMBS", "BOOTS", "NASHVILLE"], color: "blue" },
  //   { name: "COWBOY", group: ["CATTLEMAN", "CHARLATAN", "RANCHER", "SWINDLER"], color: "purple" },
  //   { name: "ITALIAN DELIGHTS", group: ["PIZZA", "PASTA", "ICE CREAM", "PROSECCO"], color: "yellow" },
  //   { name: "SALT ORDER", group: ["CHICKEN KATSU CURRY", "KATSU ROLL", "BAO BUN", "PARMESAN FRIES"], color: "green" },
  // ];

  //   const categories = [
  //   { name: "NEW YORK SIGHTS", group: ["STATUE OF LIBERTY", "TIMES SQUARE", "BROADWAY", "TRUMP TOWER"], color: "yellow" },
  //   { name: "TYPES OF BISCUITS", group: ["GRANDAD", "EMPIRE", "NICE", "DIGESTIVE"], color: "blue" },
  //   { name: "ASSOCIATED WITH JOTA", group: ["PORTUGAL", "WRISTBAND", "SEVENTEEN", "FLAIR"], color: "purple" },
  //   { name: "MUSICALS", group: ["CHICAGO", "MATILDA", "SIX", "WICKED"], color: "green" },
  // ];

  // const categories = [
  //   { name: "DO ON A DATE", group: ["DRIVE", "DINNER", "MINI GOLF", "CINEMA"], color: "yellow" },
  //   { name: "___ CAMERA", group: ["DISPOSABLE", "DIGITAL", "POLAROID", "VIDEO"], color: "blue" },
  //   { name: "BOE GIN ESSENTIALS", group: ["VIOLET", "LEMONADE", "ICE", "STRAW"], color: "purple" },
  //   { name: "ASSOCIATED WITH VALENTINES", group: ["ROSES", "CARD", "CHOCOLATES", "LOVE"], color: "green" },
  // ];

  //   const categories = [
  //   { name: "WHAT FORTY COULD MEAN", group: ["BABIES", "CLOTHES BRAND", "DAYS + NIGHTS", "SPEED LIMIT"], color: "green" },
  //   { name: "COMMON PLACES TO GIVE BIRTH", group: ["BED", "POOL", "THEATRE", "HOME"], color: "blue" },
  //   { name: "MIDWIFERY PLACEMENTS", group: ["LABOUR", "COMMUNITY", "POST", "ANTI"], color: "yellow" },
  //   { name: "LAST WORD OF MATERNITY HOSPITALS", group: ["ROYAL", "GENERAL", "ELIZABETH", "JOHN'S"], color: "purple" },
  // ];

  //   const categories = [
  //   { name: "2021", group: ["DRIVING TEST ", "FIRST BOXING DAY TOGETHER", "NICKI\'S 50TH", "GAMES NIGHT BDAY"], color: "yellow" },
  //   { name: "2022", group: ["INTER RAILING", "FIRST LONDON", "CARLY\'S 18TH", "GINGER HAIR"], color: "green" },
  //   { name: "2023", group: ["FIRST HOLIDAY ABROAD", "LONDON CHRISTMAS", "BEZIERS", "ANGE LEAVES :( "], color: "blue" },
  //   { name: "2024", group: ["BEN'S GRAD", "EUROS", "LONDON SUMMER", "FIRST LANZA"], color: "purple" },
  // ];

    const categories = [
    { name: "Christmas Day", group: ["PRESENTS ", "TURKEY", "CRACKERS", "WORK"], color: "yellow" },
    { name: "Boxing Day", group: ["PARTY", "SING-A-LONG", "FAMILY", "LEFTOVERS"], color: "green" },
    { name: "Hogmanay", group: ["BELLS", "MIDNIGHT", "COCKTAILS", "AULD LANG SYNE"], color: "blue" },
    { name: "New Year's Day", group: ["DINNER", "STEAK PIE", "SOUP", "HUNGOVER"], color: "purple" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { /* ... */ }, []);
  useEffect(() => {
    // Flatten categories into items with default status
    const transformedItems = categories.flatMap(category => 
      category.group.map(text => ({ text, status: "" }))
    );

    // Shuffle directly during transformation
    const shuffledItems = [...transformedItems].sort(() => Math.random() - 0.5);

    setItems(shuffledItems);
    console.log(items);
  }, []);



  const handleSelect = (itemText) => {
    if (selectedItems.includes(itemText)) {
      setSelectedItems(selectedItems.filter((i) => i !== itemText)); // Deselect item
    } else if (selectedItems.length < 4) {
      setSelectedItems([...selectedItems, itemText]); // Add item to selection
    }
  };

  const handleSubmit = () => {
    if (selectedItems.length === 4) {
      const foundCategory = categories.find((category) =>
        category.group.every((item) => selectedItems.includes(item))
      );


      setMessage("");
      console.log(selectedItems);
      console.log(categories);




      if (foundCategory) {
        // Correct guess: Apply bounce animation to correct cards
        setItems((prevItems) =>
          prevItems.map((item) =>
            foundCategory.group.includes(item.text)
              ? { ...item, status: "bounce" }
              : item
          )
        );
  
        // Add solved group and remove solved items
        setSolvedGroups([...solvedGroups, foundCategory]);
        setItems((prevItems) =>
          prevItems.filter((item) => !foundCategory.group.includes(item.text))
        );
  
        setMessage("");
  
        // Reset bounce animation after it ends
        setTimeout(() => {
          setItems((prevItems) =>
            prevItems.map((item) =>
              foundCategory.group.includes(item.text)
                ? { ...item, status: "" }
                : item
            )
          );
        }, 300); // 300ms matches the bounce animation duration
      } else {
        // Incorrect guess: Apply shake animation to selected cards
        setItems((prevItems) =>
          prevItems.map((item) =>
            selectedItems.includes(item.text)
              ? { ...item, status: "shake" }
              : item
          )
        );
  
        // Reset shake animation after it ends
        setTimeout(() => {
          setItems((prevItems) =>
            prevItems.map((item) =>
              selectedItems.includes(item.text)
                ? { ...item, status: "" }
                : item
            )
          );
        }, 200); // 200ms matches the shake animation duration
  
        setMistakes((prevMistakes) => prevMistakes - 1);
  
        if (mistakes - 1 === 0) {
          revealAllAnswers();
          setMessage("Game Over!");
        }
      }
  
      if (solvedGroups.length === 3 && foundCategory) {
        setMessage("Congratulations! You solved the puzzle!");
      }
      setSelectedItems([]); // Reset selected items
    } else{
      setMessage("You need to select 4 items!");
    }
  };
  
  // Reveal all answers when lives reach 0
  const revealAllAnswers = () => {
    categories.forEach((category) => {
      if (!solvedGroups.some((group) => group.name === category.name)) {
        setSolvedGroups((prevSolvedGroups) => [
          ...prevSolvedGroups,
          category,
        ]);
      }
    });
  
    setItems([]);
  };
  

  const handleDeselect = () => {
    setSelectedItems([]);
  };

  const handleShuffle = () => {
    setItems([...items.sort(() => Math.random() - 0.5)]);
  };

  const adjustFontSize = (element) => {
    const maxFontSize = 0.9; // Maximum font size in rem
    const minFontSize = 0.4; // Minimum font size in rem
    const step = 0.01; // Font size reduction step

    let fontSize = maxFontSize;
    element.style.fontSize = `${fontSize}rem`;

    // Reduce font size while content overflows
    while (element.scrollWidth > element.offsetWidth && fontSize > minFontSize) {
      fontSize -= step;
      element.style.fontSize = `${fontSize}rem`;
    }
    if (fontSize <= minFontSize) {
      element.style.overflowWrap = "break-word";
    }
  };

  useEffect(() => {
    // Adjust font size for all referenced elements on load or update
    refs.current.forEach((ref) => {
      if (ref) adjustFontSize(ref);
    });
  }, [items, selectedItems]);

  return (
    <div className="connections">
      <h1>Connections</h1>
      <p>Create four groups of four!</p>

      <div className="solved-groups">
        {solvedGroups.map((group, index) => (
          <div key={index} className={`solved-group ${group.color}`}>
            <h3>{group.name}</h3>
            <p>{group.group.join(", ")}</p>
          </div>
        ))}
      </div>

      <div className="grid">
        {items.map((item, index) => (
          <button
            key={item.text}
            className={`grid-item ${
              selectedItems.includes(item.text) ? "selected" : ""
            } ${item.status === "shake" ? "mistakeShake" : ""} ${
              item.status === "bounce" ? "solvedBounce" : ""
            }`}
            onClick={() => handleSelect(item.text)}
          >
            <p
              ref={(el) => (refs.current[index] = el)} // Add each <p> element to refs array
              className="grid-item-text"
            >
              {item.text}
            </p>
          </button>
        ))}
      </div>

      <div className="actions">
        <button onClick={handleShuffle}>Shuffle</button>
        <button onClick={handleDeselect}>Deselect All</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <p className="mistakes">Mistakes Remaining: {mistakes}</p>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Connections;
