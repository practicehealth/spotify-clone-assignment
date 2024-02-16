interface album {
    title: string;
    artists: string;
    imgUrl: string;
    id: string;
    time: string;
}

export const albums: album[] = [
    {
        title: 'Song 24',
        artists: 'By Various Artists',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b273398cf59fbf2e608128b64e1c',
        id: '1',
        time: '1:20',
    },
    {
        title: 'Sugar Candy',
        artists: 'By Maroon 5',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b27392f2d790c6a97b195f66d51e',
        id: '2',
        time: '1:30',
    },
    {
        id: '3',
        title: 'Kids Songs',
        artists: 'John McKiller',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b2731c5c420d07c0199ab44c4471',
        time: '2:00',

    },
    {
        id: '4',
        title: 'Songs I wrote',
        artists: 'Stieve Clark',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000b2732fee61bfec596bb6f5447c50',
        time: '3:10',
    },
    {
        title: 'Love Songs - Bonus',
        artists: 'Kaash Paige',
        imgUrl: 'https://i.scdn.co/image/ab67616d0000485187a86b99f8dde9c7d7e3bf62',
        id: '1',
        time: '3:20',
    },
    {
        title: 'Light Em Up',
        artists: 'Fall Out Boy',
        imgUrl: 'https://i.scdn.co/image/ab67616d00004851483a98632e23f6d2623ab75c',
        id: '2',
        time: '3:45',
    },
    {
        title: 'Songs without words',
        artists: 'Felix Mendelssohn, Bertrand Chamayou',
        imgUrl: 'https://i.scdn.co/image/ab67616d00004851ed3eeb8c55f3cfd8f2ba51cb',
        id: '3',
        time: '2:00',
    },
    {
        title: 'Songs für Liam',
        artists: 'Kraftklub',
        imgUrl: 'https://i.scdn.co/image/ab67616d000048511e7790e5b09c42c3f5948719',
        id: '4',
        time: '3:13',
    }
]
