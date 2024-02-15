type Playlist = {
  id: string;
  name: string;
  cards: Card[];
};

type Card = {
  id: string;
  songName: string;
  img: string;
  details: string;
};

export const libraryCardsData = [
  {
    title: "Create your first playlist",
    subtitle: "it's easy, we'll help you",
    buttonText: "Create playlist",
  },
  {
    title: "Discover new music",
    subtitle: "explore curated playlists",
    buttonText: "Explore playlists",
  },
];

export const categoriesData = [
  {
    id: 1,
    name: "Category 1",
    color: "#FF5733",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 2,
    name: "Category 2",
    color: "#33FF57",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 3,
    name: "Category 3",
    color: "#3366FF",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 4,
    name: "Category 4",
    color: "#FF3366",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 5,
    name: "Category 5",
    color: "#66FF33",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 6,
    name: "Category 6",
    color: "#FF9933",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 7,
    name: "Category 7",
    color: "#33FFFF",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 8,
    name: "Category 8",
    color: "#FF33FF",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 9,
    name: "Category 9",
    color: "#FFFF33",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 10,
    name: "Category 10",
    color: "#9933FF",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 11,
    name: "Category 11",
    color: "#33FF99",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 12,
    name: "Category 12",
    color: "#99FF33",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 13,
    name: "Category 13",
    color: "#FF3399",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 14,
    name: "Category 14",
    color: "#3399FF",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
  {
    id: 15,
    name: "Category 15",
    color: "#FF9933",
    image:
      "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
  },
];

export const playlists: Playlist[] = [
  {
    id: "1",
    name: "Playlist 1",
    cards: [
      {
        id: "1",
        songName: "Song 1",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 1 - Lorem ipsum dolor sit amet.",
      },
      {
        id: "2",
        songName: "Song 2",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 2 - Consectetur adipiscing elit.",
      },
      {
        id: "3",
        songName: "Song 3",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 3 - Sed do eiusmod tempor incididunt.",
      },
      {
        id: "4",
        songName: "Song 4",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 4 - Ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: "2",
    name: "Playlist 2",
    cards: [
      {
        id: "5",
        songName: "Song 5",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 5 - Duis aute irure dolor in reprehenderit.",
      },
      {
        id: "6",
        songName: "Song 6",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details:
          "Details for Song 6 - Excepteur sint occaecat cupidatat non proident.",
      },
      {
        id: "7",
        songName: "Song 7",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details:
          "Details for Song 7 - Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "8",
        songName: "Song 8",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 8 - Lorem ipsum dolor sit amet.",
      },
      {
        id: "9",
        songName: "Song 9",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 9 - Consectetur adipiscing elit.",
      },
      {
        id: "10",
        songName: "Song 10",
        img: "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
        details: "Details for Song 10 - Sed do eiusmod tempor incididunt.",
      },
    ],
  },
  // Add more playlists as needed
];
