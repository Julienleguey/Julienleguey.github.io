const mockups = {
  iphone_8plus: {
    id: 0,
    name: 'iphone 8 Plus',
    imageUrl: 'https://dl.dropboxusercontent.com/s/dqwmzsucjbis3lh/iphone_8plus_mockup_55_bis.png?dl=0',
    width: 1242,
    height: 2308,
    startTop: 165,
    subtitleToMockup: 30,
    titleToMockup: 15,
    startBottom: 150,
    mockupToSubtitle: 35,
    mockupToTitle: 15,
    titleToTitle: 105,
    titleToSubtitle: 0,
    subtitleToSubtitle: 85,
    widthStart: 132,
    heightStart: 277,
    widthEnd: 977,
    heightEnd: 1745
  },
  iphone_XR: {
    id: 1,
    name: 'iphone XR',
    imageUrl: 'https://dl.dropboxusercontent.com/s/zwoc0ewga9uodnn/iphone_XR.png?dl=0',
    width: 1242,
    height: 2340,
    startTop: 165,
    subtitleToMockup: 7,
    titleToMockup: -12,
    startBottom: 145,
    mockupToSubtitle: 35,
    mockupToTitle: 15,
    titleToTitle: 105,
    titleToSubtitle: 0,
    subtitleToSubtitle: 85,
    widthStart: 127,
    heightStart: 89,
    widthEnd: 995,
    heightEnd: 2163
  }
};

// le startTop d'iphone_XR est à 385 : en dessous, il y a trop d'image (pixels ?) sur le canvas et il ne veut pas le dl, au-dessus, c'est bon
// la limite semble se situer vers 1480 1520 ko
