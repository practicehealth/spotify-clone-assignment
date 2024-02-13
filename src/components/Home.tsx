import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import Layout from "./Layout";

function Home() {
  const [homeData, setHomeData] = useState([
      {
        "collaborative": false,
        "description": "Hottest Hindi music served here. Cover - Animal",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM",
        "id": "37i9dQZF1DX0XUfTFmNBRM",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b",
            "width": null
          }
        ],
        "name": "Hot Hits Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcMfPgAAAAA3Agw1IvQBkOMw//wM4zhV",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX0XUfTFmNBRM"
      },
      {
        "collaborative": false,
        "description": "Let these songs be the background score to your love story. Cover - Bhediya",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdpQPPZq3F7n"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n",
        "id": "37i9dQZF1DXdpQPPZq3F7n",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002b00a3ae5fe07a3f8520be66e",
            "width": null
          }
        ],
        "name": "Bollywood Mush",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "Zbxk7gAAAABLXScqPBD83ZBcxxZ+2M1s",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXdpQPPZq3F7n"
      },
      {
        "collaborative": false,
        "description": "Bollywood songs that ruled hearts in the Y2K decade. Cover - Om Shanti Om",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZNJXX2UeBij"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZNJXX2UeBij",
        "id": "37i9dQZF1DWZNJXX2UeBij",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002ce63eebfef5bed7bb1163bab",
            "width": null
          }
        ],
        "name": "All Out 00's Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcRTHgAAAACqNvQnGVBZPXwVHbug/g0J",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZNJXX2UeBij/tracks",
          "total": 100
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWZNJXX2UeBij"
      },
      {
        "collaborative": false,
        "description": "Party-ready, biggest Bollywood dance tracks of last 10 years. Cover - Bhediya",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8xfQRRX1PDm"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm",
        "id": "37i9dQZF1DX8xfQRRX1PDm",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f000000022e8146e19aaf63cba9ecfc21",
            "width": null
          }
        ],
        "name": "Bollywood Dance Music",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZbyIUwAAAABicDcZLrev0gZPZol72PY6",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX8xfQRRX1PDm"
      },
      {
        "collaborative": false,
        "description": "Bollywood Central, jab baje toh seedha dil ke centre mein lage ❤️ Cover - Animal",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXtlo6ENS92N"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N",
        "id": "37i9dQZF1DWXtlo6ENS92N",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002efcd35fd64a73060bb6605e4",
            "width": null
          }
        ],
        "name": "Bollywood Central",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcMjzAAAAABVB45CjgFfJHVhizTlzkim",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWXtlo6ENS92N"
      },
      {
        "collaborative": false,
        "description": "Fall in love with 00's Bollywood like never before! Cover - Bachna Ae Haseeno",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVq1SXCH6uFn"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVq1SXCH6uFn",
        "id": "37i9dQZF1DWVq1SXCH6uFn",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f000000029ea40053fb491932319307f2",
            "width": null
          }
        ],
        "name": "00's Love Hits",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZVjZYAAAAAA3haR+55y5Ekzpff8lE98X",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVq1SXCH6uFn/tracks",
          "total": 100
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWVq1SXCH6uFn"
      },
      {
        "collaborative": false,
        "description": "K..K..K..Kiran to T..T..T..Tuffy, the wonderfully unique decade. Cover - Raja",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa2huSXaKVkW"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa2huSXaKVkW",
        "id": "37i9dQZF1DXa2huSXaKVkW",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002ade21b666ea6464a7c693c92",
            "width": null
          }
        ],
        "name": "All Out 90s Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "Za+HlgAAAAAqWTQ7UDkK26NFvF+/qckh",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa2huSXaKVkW/tracks",
          "total": 100
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXa2huSXaKVkW"
      },
      {
        "collaborative": false,
        "description": "Relive the '90s with these beautiful romantic hits. Cover - Dil",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa6iPZDThhLh"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa6iPZDThhLh",
        "id": "37i9dQZF1DXa6iPZDThhLh",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f000000021a6c70725e6c2bd9c771c31b",
            "width": null
          }
        ],
        "name": "90s Love Hits",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZVjYzwAAAACspKkpkPbAF9j6oBpAgaE6",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa6iPZDThhLh/tracks",
          "total": 100
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXa6iPZDThhLh"
      },
      {
        "collaborative": false,
        "description": "India's Ultimate Love Playlist featuring a mix of Hindi, Punjabi and English Songs. \n\nCover- Ranbir Kapoor & Rashmika Mandanna",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX14CbVHtvHRB"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX14CbVHtvHRB",
        "id": "37i9dQZF1DX14CbVHtvHRB",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002cac7686555c2bc3bf267d555",
            "width": null
          }
        ],
        "name": "Trending Valentine's Hits ",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcRjdQAAAAC7xn7z6Edr9bd/s8dbQ7Un",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX14CbVHtvHRB/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX14CbVHtvHRB"
      },
      {
        "collaborative": false,
        "description": "Your weekly dose of the latest Hindi tracks. Cover - Arijit Singh",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXd8cOUiye1o2"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2",
        "id": "37i9dQZF1DXd8cOUiye1o2",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002c0879c3813c2d58773deb5ba",
            "width": null
          }
        ],
        "name": "New Music Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcW9egAAAAB3EPKWFR9ZNqBDsI5x82BJ",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXd8cOUiye1o2"
      },
      {
        "collaborative": false,
        "description": "Your weekly dose of the latest Hindi tracks. Cover - Arijit Singh",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXd8cOUiye1o2"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2",
        "id": "37i9dQZF1DXd8cOUiye1o2",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002c0879c3813c2d58773deb5ba",
            "width": null
          }
        ],
        "name": "New Music Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcW9egAAAAB3EPKWFR9ZNqBDsI5x82BJ",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd8cOUiye1o2/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXd8cOUiye1o2"
      },
      {
        "collaborative": false,
        "description": "Bollywood Central, jab baje toh seedha dil ke centre mein lage ❤️ Cover - Animal",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXtlo6ENS92N"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N",
        "id": "37i9dQZF1DWXtlo6ENS92N",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002efcd35fd64a73060bb6605e4",
            "width": null
          }
        ],
        "name": "Bollywood Central",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcMjzAAAAABVB45CjgFfJHVhizTlzkim",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXtlo6ENS92N/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWXtlo6ENS92N"
      },
      {
        "collaborative": false,
        "description": "New music from popular Hindi artists. Cover- Goldie Sohel & Asees Kaur",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVCuOatqCW5M"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVCuOatqCW5M",
        "id": "37i9dQZF1DWVCuOatqCW5M",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f000000023fe1a6bd8ecfc9f5b974f4c9",
            "width": null
          }
        ],
        "name": "New Music Friday Hindi ",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcX9HAAAAABNjVIm/AiKZyomHUunX3pn",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVCuOatqCW5M/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWVCuOatqCW5M"
      },
      {
        "collaborative": false,
        "description": "Latest floor fillers to kickstart your party. Cover - Fighter",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3txqabhtJQF"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3txqabhtJQF",
        "id": "37i9dQZF1DX3txqabhtJQF",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002f0284453236202fca2d05edf",
            "width": null
          }
        ],
        "name": "New in Dance",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcW/LgAAAABDWGMvZ9ZwrWXibJLvlarr",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3txqabhtJQF/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX3txqabhtJQF"
      },
      {
        "collaborative": false,
        "description": "It's difficult to not fall in love because... 'Teri Baaton Mein Aisa Uljha Jiya'",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZZMVXluTJ3U"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZMVXluTJ3U",
        "id": "37i9dQZF1DWZZMVXluTJ3U",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002cd463a1e3778993ca3976e42",
            "width": null
          }
        ],
        "name": "Latest Love Tunes",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcW8lgAAAAApRYPW1QJvcVTSHHZfgkMk",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZMVXluTJ3U/tracks",
          "total": 100
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWZZMVXluTJ3U"
      },
      {
        "collaborative": false,
        "description": "New Hip Hop from India.",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSYPG5hvDijP"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSYPG5hvDijP",
        "id": "37i9dQZF1DWSYPG5hvDijP",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f0000000270f4f7d0a88a2005c28eb966",
            "width": null
          }
        ],
        "name": "Taaza hai bro!",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcTaxwAAAAA58RkNintn0gL+c05ymGAS",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSYPG5hvDijP/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWSYPG5hvDijP"
      },
      {
        "collaborative": false,
        "description": "Hottest Hindi music served here. Cover - Animal",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM",
        "id": "37i9dQZF1DX0XUfTFmNBRM",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b",
            "width": null
          }
        ],
        "name": "Hot Hits Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcMfPgAAAAA3Agw1IvQBkOMw//wM4zhV",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUfTFmNBRM/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX0XUfTFmNBRM"
      },
      {
        "collaborative": false,
        "description": "Inhale & exhale to the beats of Lofi. ",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0F3lb30Ibi9"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0F3lb30Ibi9",
        "id": "37i9dQZF1DX0F3lb30Ibi9",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f0000000285e854e18614a1c09ad07560",
            "width": null
          }
        ],
        "name": "Lofi Vibe Hindi",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZbtFKAAAAAA2wk48Fs3M/UZYMu10H676",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0F3lb30Ibi9/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX0F3lb30Ibi9"
      },
      {
        "collaborative": false,
        "description": "India's Ultimate Love Playlist featuring a mix of Hindi, Punjabi and English Songs. \n\nCover- Ranbir Kapoor & Rashmika Mandanna",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX14CbVHtvHRB"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX14CbVHtvHRB",
        "id": "37i9dQZF1DX14CbVHtvHRB",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002cac7686555c2bc3bf267d555",
            "width": null
          }
        ],
        "name": "Trending Valentine's Hits ",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "ZcRjdQAAAAC7xn7z6Edr9bd/s8dbQ7Un",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX14CbVHtvHRB/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DX14CbVHtvHRB"
      },
      {
        "collaborative": false,
        "description": "Let these songs be the background score to your love story. Cover - Bhediya",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdpQPPZq3F7n"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n",
        "id": "37i9dQZF1DXdpQPPZq3F7n",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f00000002b00a3ae5fe07a3f8520be66e",
            "width": null
          }
        ],
        "name": "Bollywood Mush",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": "#ffffff",
        "public": true,
        "snapshot_id": "Zbxk7gAAAABLXScqPBD83ZBcxxZ+2M1s",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdpQPPZq3F7n/tracks",
          "total": 75
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXdpQPPZq3F7n"
      }
    ])
  const accessToken = 'BQDQ6ky3hg476wbyYjHOFNrgazi3YMjE7KhOOie465a61QbVDUkNYWcoU_WxEC6DkJWp3Xkw1_6mKok3KkwNW1_EDFb86Ic42mKQx8v1eXJsXH-sEOE';

    // useEffect(() => {
    //     fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHCxg5H5PtqW', {
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             // Handle the response data
    //             setHomeData(data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }, [])

  return (
      <div className="mt-[70px] p-2" style={{background: 'linear-gradient(to bottom, #181818, #121212 10%)'}}>
        <h2 className=" text-2xl font-bold">Hindi</h2>
        <div className="grid grid-cols-5 mt-3 gap-5">
          {homeData.length > 0 && homeData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1 bg-gradient-to-b from-[#161616] to-[#181818] p-2 rounded-lg ">
            <img 
              src={item.images[0].url}
              alt={item.name}
              className=" w-[190px] h-[190px] rounded-md object-contain"
            />
            <div className="flex flex-col justify-evenly h-[100px] px-2">
              <h3 className=" text-lg font-bold">{item.name}</h3>
              <p className="font-[100] line-clamp-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Home