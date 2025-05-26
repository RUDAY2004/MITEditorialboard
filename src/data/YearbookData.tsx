
export interface YearbookData {
    year: string;
    title: string;
    description: string;
    coverImage: string;
    pdfUrl: string;
    pages: number;
    theme: string;
  }
  
  export const yearbooksData: YearbookData[] = [
    {
      year: '2018-19',
      title: 'MIT Yearbook 2018-19',
      description: 'A journey through memories, achievements, and milestones of the academic year 2018-19.',
      coverImage: 'public/yearbookpic/2018-19.png',
      pdfUrl: 'https://libportal.manipal.edu/MIT/Magazines/2018-19.pdf',
      pages: 303,
      theme: 'Ilios'
    },
    {
      year: '2017-18',
      title: 'MIT Yearbook 2017-18',
      description: 'Capturing the essence of growth, learning, and unforgettable moments from 2017-18.',
      coverImage: 'public/yearbookpic/2017-18.png',
      pdfUrl: 'https://libportal.manipal.edu/MIT/Magazines/2017-18.pdf',
      pages: 382,
      theme: 'Renastere'
    },
    {
      year: '2016-17',
      title: 'MIT Yearbook 2015-16',
      description: 'A collection of memories, achievements, and stories that define our journey in 2015-16.',
      coverImage: 'public/yearbookpic/2016-17.png',
      pdfUrl: 'https://libportal.manipal.edu/MIT/Magazines/2015-16.pdf',
      pages: 501,
      theme: 'Taabir'
    },
    {
      year: '2015-16',
      title: 'MIT Yearbook 2014-15',
      description: 'Celebrating the remarkable year of 2014-15 with memories that will last forever.',
      coverImage: 'public/yearbookpic/2015-16.png',
      pdfUrl: 'https://libportal.manipal.edu/MIT/Magazines/2014-15.pdf',
      pages: 460,
      theme: 'Bodhisattva'
    }
  ];
  