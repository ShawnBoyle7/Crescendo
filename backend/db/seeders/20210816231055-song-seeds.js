module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Songs',
    [
      {
        name: 'Drive My Car', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3', songLength: '2:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Norwegian Wood (This Bird Has Flown)', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3', songLength: '2:04', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "You Won't See Me", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", songLength: '3:19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nowhere Man', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Think For Yourself', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3', songLength: '2:18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Word', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Michelle', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3', songLength: '2:42', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'What Goes On', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3', songLength: '2:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Girl', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3', songLength: '2:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "I'm Looking Through You", artistId: 1, albumId: 1, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3", songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'In My Life', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3', songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Wait', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3', songLength: '2:14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'If I Needed Someone', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3', songLength: '2:22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Run For Your Life', artistId: 1, albumId: 1, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3', songLength: '2:21', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Mine', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Mine.mp3', songLength: '3:50', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Sparks Fly', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Sparks+Fly.mp3', songLength: '4:20', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Back To December", artistId: 2, albumId: 2, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Back+To+December.mp3", songLength: '4:53', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Speak Now', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Speak+Now.mp3', songLength: '4:00', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Dear John', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Dear+John.mp3', songLength: '6:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Mean', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Mean.mp3', songLength: '3:57', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Story Of Us', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/The+Story+Of+Us.mp3', songLength: '4:25', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Never Grow Up', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Never+Grow+Up.mp3', songLength: '4:50', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Enchanted', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Enchanted.mp3', songLength: '5:52', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Better Than Revenge", artistId: 2, albumId: 2, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Better+Than+Revenge.mp3", songLength: '3:37', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Innocent', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Innocent.mp3', songLength: '5:02', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Haunted', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Haunted.mp3', songLength: '4:02', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Last Kiss', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Last+Kiss.mp3', songLength: '6:07', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Long Live', artistId: 2, albumId: 2, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/speak-now/speak-now/Long+Live.mp3', songLength: '5:17', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Wesley\'s Theory', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Wesley\'s+Theory.mp3', songLength: '4:47', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'For Free? - Interlude', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/For+Free+Interlude+-+Kendrick+Lamar+(To+Pimp+a+Butterfly).mp3', songLength: '2:10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "King Kunta", artistId: 3, albumId: 3, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/King+Kunta.mp3", songLength: '3:54', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Institutionalized", artistId: 3, albumId: 3, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Institutionalized.mp3", songLength: '4:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'These Walls', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/These+Walls.mp3', songLength: '5:00', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'u', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/u.mp3', songLength: '4:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Alright', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Alright.mp3', songLength: '3:39', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'For Sale? - Interlude', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/For+Sale+(Interlude).mp3', songLength: '4:51', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Momma', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Momma.mp3', songLength: '4:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Hood Politics', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Hood+Politics.mp3', songLength: '4:52', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'How Much A Dollar Cost', artistId: 3, albumId: 3, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/How+Much+A+Dollar+Cost.mp3", songLength: '4:21', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Complexion (A Zulu Love)', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Complexion+(A+Zulu+Love).mp3', songLength: '4:23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Blacker The Berry', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/The+Blacker+The+Berry+-+Kendrick+Lamar+(To+Pimp+a+Butterfly).mp3', songLength: '5:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'You Ain\'t Gotta Lie (Momma Said)', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/You+Ain\'t+Gotta+Lie+(Momma+Said).mp3', songLength: '4:01', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'i', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/i.mp3', songLength: '5:36', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Mortal Man', artistId: 3, albumId: 3, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/to-pimp-a-butterfly/Mortal+Man.mp3', songLength: '12:07', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'ECHOES', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Echoes.mp3', songLength: '1:40', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'CALLING', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Calling.mp3', songLength: '3:34', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Sign", artistId: 4, albumId: 4, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Sign.mp3", songLength: '3:56', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'UNION', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Union.mp3', songLength: '4:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ATMOSPHERE', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Atmosphere.mp3', songLength: '4:39', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'PLANETARIUM', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Planetarium.mp3', songLength: '3:45', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'CORE', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Core.mp3', songLength: '1:59', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'FREEDOM', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Freedom.mp3', songLength: '3:20', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'ENEMY', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Enemy.mp3', songLength: '4:13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "SOUL RED", artistId: 4, albumId: 4, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Soul+Red.mp3", songLength: '3:40', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'LUNA', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Luna.mp3', songLength: '4:46', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'TONIGHT', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Tonight.mp3', songLength: '3:51', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'AMBIENCE', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/Ambience.mp3', songLength: '4:10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'TO-O-KU-E', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/TO-O-KU-E.mp3', songLength: '4:41', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'F.O.E', artistId: 4, albumId: 4, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/microcosm/F.O.E.mp3', songLength: '1:11', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Soldier Side - Intro', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Soldier+Side+-+Intro.mp3', songLength: '1:03', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'B.Y.O.B', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/B.Y.O.B..mp3', songLength: '4:15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Revenga", artistId: 5, albumId: 5, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Revenga.mp3", songLength: '3:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Cigaro', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Cigaro.mp3', songLength: '2:11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Radio/Video', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Radio+Video.mp3', songLength: '4:09', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'This Cocaine Makes Me Feel Like I\'m On This Song', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/This+Cocaine+Makes+Me+Feel+Like+I\'m+On+This+Song.mp3', songLength: '2:08', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Violent Pornography', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Violent+Pornography+.mp3', songLength: '3:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Question!', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Question!.mp3', songLength: '3:20', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Sad Statue', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Sad+Statue.mp3', songLength: '3:25', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "Old School Hollywood", artistId: 5, albumId: 5, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Old+School+Hollywood.mp3", songLength: '2:56', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Lost In Hollywood', artistId: 5, albumId: 5, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/mesmerize/Lost+In+Hollywood.mp3', songLength: '5:20', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Drive My Car', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3', songLength: '2:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Norwegian Wood (This Bird Has Flown)', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3', songLength: '2:04', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "You Won't See Me", artistId: 6, albumId: 6, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", songLength: '3:19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nowhere Man', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Think For Yourself', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3', songLength: '2:18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Word', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Michelle', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3', songLength: '2:42', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'What Goes On', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3', songLength: '2:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Girl', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3', songLength: '2:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "I'm Looking Through You", artistId: 6, albumId: 6, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3", songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'In My Life', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3', songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Wait', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3', songLength: '2:14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'If I Needed Someone', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3', songLength: '2:22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Run For Your Life', artistId: 6, albumId: 6, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3', songLength: '2:21', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Drive My Car', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3', songLength: '2:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Norwegian Wood (This Bird Has Flown)', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3', songLength: '2:04', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "You Won't See Me", artistId: 7, albumId: 7, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", songLength: '3:19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nowhere Man', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Think For Yourself', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3', songLength: '2:18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Word', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Michelle', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3', songLength: '2:42', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'What Goes On', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3', songLength: '2:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Girl', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3', songLength: '2:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "I'm Looking Through You", artistId: 7, albumId: 7, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3", songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'In My Life', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3', songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Wait', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3', songLength: '2:14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'If I Needed Someone', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3', songLength: '2:22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Run For Your Life', artistId: 7, albumId: 7, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3', songLength: '2:21', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Drive My Car', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3', songLength: '2:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Norwegian Wood (This Bird Has Flown)', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3', songLength: '2:04', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "You Won't See Me", artistId: 8, albumId: 8, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", songLength: '3:19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nowhere Man', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Think For Yourself', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3', songLength: '2:18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Word', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Michelle', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3', songLength: '2:42', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'What Goes On', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3', songLength: '2:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Girl', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3', songLength: '2:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "I'm Looking Through You", artistId: 8, albumId: 8, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3", songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'In My Life', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3', songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Wait', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3', songLength: '2:14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'If I Needed Someone', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3', songLength: '2:22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Run For Your Life', artistId: 8, albumId: 8, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3', songLength: '2:21', createdAt: new Date(), updatedAt: new Date(),
      },

      {
        name: 'Drive My Car', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Drive+My+Car+(Remastered+2009).mp3', songLength: '2:28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Norwegian Wood (This Bird Has Flown)', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Norwegian+Wood+(This+Bird+Has+Flown).mp3', songLength: '2:04', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "You Won't See Me", artistId: 9, albumId: 9, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/You+Won't+See+Me+(Remastered+2009).mp3", songLength: '3:19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Nowhere Man', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Nowhere+Man+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Think For Yourself', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Think+For+Yourself+(Remastered+2009).mp3', songLength: '2:18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'The Word', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/The+Word+(Remastered+2009).mp3', songLength: '2:43', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Michelle', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Michelle+(Remastered+2009).mp3', songLength: '2:42', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'What Goes On', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/What+Goes+On+(Remastered+2009).mp3', songLength: '2:48', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Girl', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Girl+(Remastered+2009).mp3', songLength: '2:31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: "I'm Looking Through You", artistId: 9, albumId: 9, songUrl: "https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/I'm+Looking+Through+You+(Remastered+2009).mp3", songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'In My Life', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/In+My+Life+(Remastered+2009).mp3', songLength: '2:26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Wait', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Wait+(Remastered+2009).mp3', songLength: '2:14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'If I Needed Someone', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/If+I+Needed+Someone+(Remastered+2009).mp3', songLength: '2:22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Run For Your Life', artistId: 9, albumId: 9, songUrl: 'https://crescendo-bucket.s3.us-west-1.amazonaws.com/rubber-soul/rubber+soul/Run+For+Your+Life+(Remastered+2009).mp3', songLength: '2:21', createdAt: new Date(), updatedAt: new Date(),
      },

    ],
  ),
  down: (queryInterface) => queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true }),
};
