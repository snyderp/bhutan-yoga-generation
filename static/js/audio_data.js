(function () {
  const audioData = {
    tracks: {
      1: [
        {
          uuid: '97b52293-cab9-42bc-b1b9-a08504b5b18c',
          name: 'Welcome'
        }
      ],
      2: [
        {
          uuid: 'a27333f0-231b-4928-953a-a97de101da12',
          name: 'Spinal rolling'
        }
      ],
      3: [
        {
          uuid: '26cc1017-3468-4191-8e68-e6cab03e0600',
          name: 'Knees out'
        },
        {
          uuid: '711d553a-2aaf-4e31-9835-939e66d38f41',
          name: 'Clock moves'
        },
        {
          uuid: '168fc734-e0f5-4d09-a26c-fc59c80661f9',
          name: 'Knee chest twist'
        },
        {
          uuid: '752e155e-2c31-4922-a698-bef05e39cace',
          name: 'Knee chest twist with clam moves'
        },
        {
          uuid: 'f6847106-ecba-4e83-85bc-a5b8b96d5733',
          name: 'Happy baby'
        },
        {
          uuid: '12c8efaa-d23d-4022-a749-db5801162ca1',
          name: 'Happy baby variations'
        }
      ],
      4: [
        {
          uuid: '32144d11-4e67-4f96-916f-fc603b4b8cd1',
          name: 'Full body stretch series'
        },
        {
          uuid: 'c1691c56-fbb0-4ce2-a7c1-fa0e645cf722',
          name: 'Half moon stretch'
        },
        {
          uuid: '5c74b061-3034-4d6b-8575-739e82419877',
          name: 'Scissors'
        }
      ],
      5: [
        {
          uuid: '7d633c86-e65a-417d-8113-68011ac93eda',
          name: 'Arms akimbo side to side'
        },
        {
          uuid: '50fcbf69-4f1a-4efc-9030-0aae98e34183',
          name: 'Paintbrush warmup'
        },
        {
          uuid: '832370e8-25ff-45bb-a8ef-91535f403186',
          name: 'Wind relieving variation warmup'
        }
      ],
      6: [
        {
          uuid: 'c0a0aa77-a110-4b93-8a9c-bbc4e3408bd4',
          name: 'Transition supine to sitting'
        }
      ],
      7: [
        {
          uuid: '6d9ffcba-7f01-4b68-9d7a-b60a2e3d9d12',
          name: 'Belly breath'
        }
      ],
      8: [
        {
          uuid: '39a74c46-53fa-44e9-8fbc-d0051a3ceeb9',
          name: 'Kapalabhati'
        },
        {
          uuid: '855253a5-1dbc-4933-b138-baa4f8e96caa',
          name: 'Brahmari'
        },
        {
          uuid: '05867ee6-5add-4944-9f5c-3d7f8c6aa900',
          name: 'Counted breathing'
        },
        {
          uuid: '99b245ea-a5f2-472b-a26d-66889aadf8f3',
          name: 'Anuloma viloma'
        },
        {
          uuid: '0cc19860-c900-4794-b219-c646cbbdf689',
          name: 'Nadi shodhana'
        },
        {
          uuid: '72fbc61e-fb70-4b45-9416-a3b65e472928',
          name: 'Dirgha'
        },
        {
          uuid: 'fa2c88fb-0817-4e29-a8a5-702fbb23039d',
          name: 'Ujjayi'
        },
        {
          uuid: 'abb0eb71-df55-4c79-bbf3-d52af0e5dc39',
          name: 'Shitali'
        }
      ],
      10: [
        {
          uuid: '46438599-36bb-42ec-9018-fdf83d22ef97',
          name: 'Seated knees side to side'
        },
        {
          uuid: '4130040b-b679-41df-89c8-04d2e3ff3e1c',
          name: 'Seated knees side to side with dolphin'
        },
        {
          uuid: '7db23e9d-5fd8-4395-887c-7f25c22a253a',
          name: 'Seated chi gong arms'
        }
      ],
      11: [
        {
          uuid: 'fb1d5514-f240-4de6-b75f-5ebe314ec49a',
          name: 'Bound angle'
        },
        {
          uuid: '532a3866-1a8d-4382-87e0-32c0c8e2db70',
          name: 'Cow face'
        },
        {
          uuid: 'cc163256-b202-49ab-894d-35f55a8ef79a',
          name: 'Great Seal'
        },
        {
          uuid: '36ca4d99-fae8-4a42-8f01-ea4add68627d',
          name: 'Posterior stretch'
        },
        {
          uuid: '9510970f-c927-4736-829d-00228f6fea70',
          name: 'Spinal twist'
        },
        {
          uuid: '7918c048-e803-4006-8e10-2e690ecc80d4',
          name: 'Reverse table'
        },
        {
          uuid: '483b2cb8-0b08-4a20-99fc-641479f11edf',
          name: 'Boat up'
        }
      ],
      12: [
        {
          uuid: 'e4996dde-7ccc-43c6-ab4f-26d9153a2950',
          name: 'Six movements of the spine'
        },
        {
          uuid: '3ded4b68-fafb-4cc7-8782-1fa86141dbfd',
          name: 'Six moves variation'
        }
      ],
      13: [
        {
          uuid: '445267f3-d537-4d64-9736-88685813fd38',
          name: 'Downward dog'
        },
        {
          uuid: '20ef1ef3-e9b4-4294-aee0-c5d1f4c4e644',
          name: 'Upward dog'
        },
        {
          uuid: '7a633b0b-6a60-4bb2-b560-0116574020f6',
          name: '3 legged dog'
        },
        {
          uuid: 'e9045fd4-07f0-4189-a7d9-099dcf81eba7',
          name: 'Pigeon'
        },
        {
          uuid: '73143d1d-6069-453a-ba06-b052024a1faf',
          name: 'Frog'
        },
        {
          uuid: 'ccf57f2f-ee6b-4f4d-a03b-2105dcf85aa0',
          name: 'Camel'
        },
        {
          uuid: '6d0b4868-2462-42fb-a083-b67255988c8e',
          name: 'Child'
        }
      ],
      14: [
        {
          uuid: '3ad0c618-e9a6-4ada-8e2e-427201105ce0',
          name: 'Transition child to belly down position'
        }
      ],
      15: [
        {
          uuid: '0e76cd33-ef8c-4849-a4e9-4595fccd391b',
          name: 'Sphinx'
        },
        {
          uuid: '8d17e1ba-c3a1-40b2-9496-4bb65288c66b',
          name: 'Cobra'
        },
        {
          uuid: '8e9598f3-b11d-4458-883d-776d36350cab',
          name: 'Locust half'
        },
        {
          uuid: 'b28907b6-6a15-448e-a034-d20b86b1a82b',
          name: 'Bow pose'
        },
        {
          uuid: '1ad8b0d8-f390-4dcc-a38e-cf0cca9d8b2e',
          name: 'Boat down'
        }
      ],
      16: [
        {
          uuid: 'd66fc7cd-5654-43ba-9d8c-3d0c10aba6ba',
          name: 'Transition belly down to child'
        }
      ],
      17: [
        {
          uuid: '765e1907-10eb-4acd-a9af-a4fa2b6a170a',
          name: 'Transition sitting or child to standing'
        }
      ],
      18: [
        {
          uuid: '5404af1f-f865-447e-8459-87964c79bfc4',
          name: "Grandfather's coat"
        },
        {
          uuid: '50c11d2e-d962-4067-b72b-1ded384298c7',
          name: 'Peanut butter jar'
        },
        {
          uuid: '197f5eb7-4617-4747-80da-153426b43da9',
          name: 'Breath of joy'
        },
        {
          uuid: '36aac2c6-9e54-4634-a3d3-1eb356e1be9f',
          name: 'Toes, heels and knees'
        },
        {
          uuid: '722af875-7e0d-4639-8ea5-c0eff6cccbf6',
          name: 'Sun breath'
        }
      ],
      19: [
        {
          uuid: 'e709a472-bbda-45b1-b97d-b13807bd2c3d',
          name: 'Mountain'
        },
        {
          uuid: '48759769-5c60-4e1f-9cff-ae48a27f245e',
          name: 'Forward fold'
        },
        {
          uuid: '9785b2c7-d12e-4f81-b2af-733a60653834',
          name: 'Half moon'
        },
        {
          uuid: 'c654a189-4bd4-40cb-a432-34f9d51852a9',
          name: 'Chair pose'
        },
        {
          uuid: '788abc2e-7156-4854-a0d5-1b1d622899e8',
          name: 'Yoga mudra standing'
        },
        {
          uuid: '9b40ed2f-07ab-437b-9650-68dae6153c58',
          name: 'Warrior I'
        },
        {
          uuid: '9b46b9ee-8c4a-4ae2-839c-fec7fa96f5b5',
          name: 'Warrior II'
        },
        {
          uuid: '4d137186-8ed7-47e2-a4d2-de256723c0a5',
          name: 'Reverse warrior II'
        },
        {
          uuid: 'bfbc900b-db29-4cb8-83ef-68747dd6fda4',
          name: 'Archer'
        },
        {
          uuid: 'f379e929-ee49-49d6-9fc9-1697e2ce6667',
          name: 'Triangle'
        },
        {
          uuid: '925c6104-a0cf-4a3a-a6ff-2a6205ff75db',
          name: 'Side angle'
        },
        {
          uuid: '9774f6e7-0aeb-4885-9152-08f0053d7a62',
          name: 'Five pointed star'
        }
      ],
      20: [
        {
          uuid: 'acf4090f-669e-4729-9f81-32c52341fc10',
          name: 'Tree'
        },
        {
          uuid: '82034b78-b924-4cb8-97a2-9a0d5bc5c210',
          name: 'Crane'
        },
        {
          uuid: '91de3760-73b2-4f9d-96d9-2d3ca9200e33',
          name: 'Eagle'
        },
        {
          uuid: '657a9da2-1e32-4bd0-b853-263835af9c50',
          name: 'Dancer'
        }
      ],
      21: [
        {
          uuid: '65243f7e-4337-4c71-8738-09cba35da7a6',
          name: 'Sun salute'
        },
        {
          uuid: '923209f2-b0fd-4fec-8b18-e7a63eb1127a',
          name: 'Five elements'
        },
        {
          uuid: '8cc73683-615e-44ea-bdb7-3a3fb93c8fe4',
          name: 'Five tibetans'
        }
      ],
      22: [
        {
          uuid: '63727941-96ff-4ec2-bfac-e14af45d5c4a',
          name: 'Transition from standing to sitting to supine'
        }
      ],
      23: [
        {
          uuid: '792bbd78-e92e-441b-9661-3f25d89f4374',
          name: 'Wind relieving'
        },
        {
          uuid: 'd0140a77-f2b7-40fa-8dc8-f9b0684bffc9',
          name: 'Navel gazing'
        },
        {
          uuid: '33b417b1-e3b2-497c-be72-bac922f75945',
          name: 'Bridge'
        },
        {
          uuid: '3269b19f-c2ae-4012-ba25-085cbb8b7962',
          name: 'Supine pigeon'
        },
        {
          uuid: '40a33ade-d8eb-41f3-bdcd-cd82d448074a',
          name: 'Fish'
        }
      ],
      24: [
        {
          uuid: 'd3fc8ac4-768d-4f1a-a7f6-890813ef6125',
          name: 'Knee down twist'
        }
      ],
      25: [
        {
          uuid: '0601d25c-2f69-4872-b9fb-9b6605d7764d',
          name: 'Gayatri mantra'
        },
        {
          uuid: '43767168-a36f-41e6-9123-1ac48f8d232f',
          name: 'Sahanavavatu'
        },
        {
          uuid: '981db708-8589-43e7-8628-6599999a1de7',
          name: 'Meditation autumn'
        },
        {
          uuid: '0d697a16-70d1-4e3d-ace7-e3cbb2ebab68',
          name: 'Meditation spring'
        },
        {
          uuid: '15a061c4-2255-4da6-96b2-b78dfd36a079',
          name: 'Meditation winter'
        }
      ],
      26: [
        {
          uuid: 'c510fedb-9554-4b6b-97d8-d29d76338299',
          name: 'Savasana'
        }
      ]
    },
    uuidToNum: {
      '97b52293-cab9-42bc-b1b9-a08504b5b18c': '1',
      'a27333f0-231b-4928-953a-a97de101da12': '2',
      '26cc1017-3468-4191-8e68-e6cab03e0600': '3',
      '711d553a-2aaf-4e31-9835-939e66d38f41': '4',
      '168fc734-e0f5-4d09-a26c-fc59c80661f9': '5',
      '752e155e-2c31-4922-a698-bef05e39cace': '6',
      'f6847106-ecba-4e83-85bc-a5b8b96d5733': '7',
      '12c8efaa-d23d-4022-a749-db5801162ca1': '8',
      '32144d11-4e67-4f96-916f-fc603b4b8cd1': '9',
      'c1691c56-fbb0-4ce2-a7c1-fa0e645cf722': '10',
      '5c74b061-3034-4d6b-8575-739e82419877': '11',
      '7d633c86-e65a-417d-8113-68011ac93eda': '12',
      '50fcbf69-4f1a-4efc-9030-0aae98e34183': '13',
      '832370e8-25ff-45bb-a8ef-91535f403186': '14',
      'c0a0aa77-a110-4b93-8a9c-bbc4e3408bd4': '15',
      '6d9ffcba-7f01-4b68-9d7a-b60a2e3d9d12': '16',
      '39a74c46-53fa-44e9-8fbc-d0051a3ceeb9': '17',
      '855253a5-1dbc-4933-b138-baa4f8e96caa': '18',
      '05867ee6-5add-4944-9f5c-3d7f8c6aa900': '19',
      '99b245ea-a5f2-472b-a26d-66889aadf8f3': '20',
      '0cc19860-c900-4794-b219-c646cbbdf689': '21',
      '72fbc61e-fb70-4b45-9416-a3b65e472928': '22',
      'fa2c88fb-0817-4e29-a8a5-702fbb23039d': '23',
      'abb0eb71-df55-4c79-bbf3-d52af0e5dc39': '24',
      '46438599-36bb-42ec-9018-fdf83d22ef97': '25',
      '4130040b-b679-41df-89c8-04d2e3ff3e1c': '26',
      '7db23e9d-5fd8-4395-887c-7f25c22a253a': '27',
      'fb1d5514-f240-4de6-b75f-5ebe314ec49a': '28',
      '532a3866-1a8d-4382-87e0-32c0c8e2db70': '29',
      'cc163256-b202-49ab-894d-35f55a8ef79a': '30',
      '36ca4d99-fae8-4a42-8f01-ea4add68627d': '31',
      '9510970f-c927-4736-829d-00228f6fea70': '32',
      '7918c048-e803-4006-8e10-2e690ecc80d4': '33',
      '483b2cb8-0b08-4a20-99fc-641479f11edf': '34',
      'e4996dde-7ccc-43c6-ab4f-26d9153a2950': '35',
      '3ded4b68-fafb-4cc7-8782-1fa86141dbfd': '36',
      '445267f3-d537-4d64-9736-88685813fd38': '37',
      '20ef1ef3-e9b4-4294-aee0-c5d1f4c4e644': '38',
      '7a633b0b-6a60-4bb2-b560-0116574020f6': '39',
      'e9045fd4-07f0-4189-a7d9-099dcf81eba7': '40',
      '73143d1d-6069-453a-ba06-b052024a1faf': '41',
      'ccf57f2f-ee6b-4f4d-a03b-2105dcf85aa0': '42',
      '6d0b4868-2462-42fb-a083-b67255988c8e': '43',
      '3ad0c618-e9a6-4ada-8e2e-427201105ce0': '44',
      '0e76cd33-ef8c-4849-a4e9-4595fccd391b': '45',
      '8d17e1ba-c3a1-40b2-9496-4bb65288c66b': '46',
      '8e9598f3-b11d-4458-883d-776d36350cab': '47',
      'b28907b6-6a15-448e-a034-d20b86b1a82b': '48',
      '1ad8b0d8-f390-4dcc-a38e-cf0cca9d8b2e': '49',
      'd66fc7cd-5654-43ba-9d8c-3d0c10aba6ba': '50',
      '765e1907-10eb-4acd-a9af-a4fa2b6a170a': '51',
      '5404af1f-f865-447e-8459-87964c79bfc4': '52',
      '50c11d2e-d962-4067-b72b-1ded384298c7': '53',
      '197f5eb7-4617-4747-80da-153426b43da9': '54',
      '36aac2c6-9e54-4634-a3d3-1eb356e1be9f': '55',
      '722af875-7e0d-4639-8ea5-c0eff6cccbf6': '56',
      'e709a472-bbda-45b1-b97d-b13807bd2c3d': '57',
      '48759769-5c60-4e1f-9cff-ae48a27f245e': '58',
      '9785b2c7-d12e-4f81-b2af-733a60653834': '59',
      'c654a189-4bd4-40cb-a432-34f9d51852a9': '60',
      '788abc2e-7156-4854-a0d5-1b1d622899e8': '61',
      '9b40ed2f-07ab-437b-9650-68dae6153c58': '62',
      '9b46b9ee-8c4a-4ae2-839c-fec7fa96f5b5': '63',
      '4d137186-8ed7-47e2-a4d2-de256723c0a5': '64',
      'bfbc900b-db29-4cb8-83ef-68747dd6fda4': '65',
      'f379e929-ee49-49d6-9fc9-1697e2ce6667': '66',
      '925c6104-a0cf-4a3a-a6ff-2a6205ff75db': '67',
      '9774f6e7-0aeb-4885-9152-08f0053d7a62': '68',
      'acf4090f-669e-4729-9f81-32c52341fc10': '69',
      '82034b78-b924-4cb8-97a2-9a0d5bc5c210': '70',
      '91de3760-73b2-4f9d-96d9-2d3ca9200e33': '71',
      '657a9da2-1e32-4bd0-b853-263835af9c50': '72',
      '65243f7e-4337-4c71-8738-09cba35da7a6': '73',
      '923209f2-b0fd-4fec-8b18-e7a63eb1127a': '74',
      '8cc73683-615e-44ea-bdb7-3a3fb93c8fe4': '75',
      '63727941-96ff-4ec2-bfac-e14af45d5c4a': '76',
      '792bbd78-e92e-441b-9661-3f25d89f4374': '77',
      'd0140a77-f2b7-40fa-8dc8-f9b0684bffc9': '78',
      '33b417b1-e3b2-497c-be72-bac922f75945': '79',
      '3269b19f-c2ae-4012-ba25-085cbb8b7962': '80',
      '40a33ade-d8eb-41f3-bdcd-cd82d448074a': '81',
      'd3fc8ac4-768d-4f1a-a7f6-890813ef6125': '82',
      '0601d25c-2f69-4872-b9fb-9b6605d7764d': '83',
      '43767168-a36f-41e6-9123-1ac48f8d232f': '84',
      '981db708-8589-43e7-8628-6599999a1de7': '85',
      '0d697a16-70d1-4e3d-ace7-e3cbb2ebab68': '86',
      '15a061c4-2255-4da6-96b2-b78dfd36a079': '87',
      'c510fedb-9554-4b6b-97d8-d29d76338299': '88'
    },
    numToPath: {
      1: ['1', 0],
      2: ['2', 0],
      3: ['3', 0],
      4: ['3', 1],
      5: ['3', 2],
      6: ['3', 3],
      7: ['3', 4],
      8: ['3', 5],
      9: ['4', 0],
      10: ['4', 1],
      11: ['4', 2],
      12: ['5', 0],
      13: ['5', 1],
      14: ['5', 2],
      15: ['6', 0],
      16: ['7', 0],
      17: ['8', 0],
      18: ['8', 1],
      19: ['8', 2],
      20: ['8', 3],
      21: ['8', 4],
      22: ['8', 5],
      23: ['8', 6],
      24: ['8', 7],
      25: ['10', 0],
      26: ['10', 1],
      27: ['10', 2],
      28: ['11', 0],
      29: ['11', 1],
      30: ['11', 2],
      31: ['11', 3],
      32: ['11', 4],
      33: ['11', 5],
      34: ['11', 6],
      35: ['12', 0],
      36: ['12', 1],
      37: ['13', 0],
      38: ['13', 1],
      39: ['13', 2],
      40: ['13', 3],
      41: ['13', 4],
      42: ['13', 5],
      43: ['13', 6],
      44: ['14', 0],
      45: ['15', 0],
      46: ['15', 1],
      47: ['15', 2],
      48: ['15', 3],
      49: ['15', 4],
      50: ['16', 0],
      51: ['17', 0],
      52: ['18', 0],
      53: ['18', 1],
      54: ['18', 2],
      55: ['18', 3],
      56: ['18', 4],
      57: ['19', 0],
      58: ['19', 1],
      59: ['19', 2],
      60: ['19', 3],
      61: ['19', 4],
      62: ['19', 5],
      63: ['19', 6],
      64: ['19', 7],
      65: ['19', 8],
      66: ['19', 9],
      67: ['19', 10],
      68: ['19', 11],
      69: ['20', 0],
      70: ['20', 1],
      71: ['20', 2],
      72: ['20', 3],
      73: ['21', 0],
      74: ['21', 1],
      75: ['21', 2],
      76: ['22', 0],
      77: ['23', 0],
      78: ['23', 1],
      79: ['23', 2],
      80: ['23', 3],
      81: ['23', 4],
      82: ['24', 0],
      83: ['25', 0],
      84: ['25', 1],
      85: ['25', 2],
      86: ['25', 3],
      87: ['25', 4],
      88: ['26', 0]
    }
  }

  window.YOGA.numAudioFiles = Object.keys(audioData.tracks).reduce((prev, cur) => {
    return prev + cur.length
  }, 0)

  window.YOGA.audioData = audioData
}())
