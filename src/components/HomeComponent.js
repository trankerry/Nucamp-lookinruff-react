import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators, Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

const services = [
  {
      id:0,
      name: 'Boarding',
      src: 'https://images.unsplash.com/photo-1540261548138-621df249f026?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      description: 'All of our daycare packages are fully customizable to give your pet the perfect blend of rest, play time, and individualized care suited to their needs. Energetic pups can romp around spacious play areas in supervised All Day Play and dogs that prefer human interaction can enjoy solo walks and belly rubs from our staff. ',
      packages: [
          {
              level: 'Basic',
              price: '$20',
              amenities: ['Shared space','Shared toys','Treats']
          },
          {
              level: 'Luxury',
              price: '$75',
              amenities: ['Private kennel','Luxury Chew Toy','Treats']
          }
      ]
  },
  {
      id:1,
      name: 'Grooming',
      src: 'https://images.unsplash.com/photo-1531617494862-4e322fb560c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
      description: 'We deliver high quality grooming services using state of the art equipment and luxury products, while remaining easy on your wallet. We provide ease when booking your appointments, and even have parking right in front of the shop! We focus on proper safety techniques for your pet and our staff that include special mats to prevent slipping in and out of the tubs.',
      packages: [
          {
              level: 'Basic',
              price: '$75',
              amenities: ['Wash','Nails']
          },
          {
              level: 'Luxury',
              price: '$205',
              amenities: ['Wash','Nails','Hair Cut','Brushing']
          }
      ]
  },
  {
      id:2,
      name: 'Dog Walking',
      src: 'https://images.unsplash.com/photo-1597603413826-cd1c06b05222?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      description: 'We understand that life can get too busy sometimes, and our furry family members need a little more attention than we can give them. We take a human to human approach to our services such as not charging for late cancellations or scheduling before 10am the day of. Our affordable and flexible pet sitting rates and services allow you the option to give your pup the potty breaks that they need, and the love and exercise that they deserve.',
      packages: [
          {
              level: 'Basic',
              price: '$10',
              amenities: ['ruff','woof','rawr']
          },
      ]
  }
]

function RenderCard({item}) {
  return (
      <Card>
          <CardImg src={item.src} alt={item.name} />
          <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );
}

const Home = (props) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === services.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = services.map(service => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={service.id}
      >
        <img src={service.src} alt={service.name} width={800} height={500} mode='fill'/>
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel className='container text-center mt-5' 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={services} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div className="container">
    <div className="row">
        <div className='col-12 mt-5 text-center'>
            <h2>Services</h2>
            <hr />
        </div>
        <div className="col-md m-1">
            <RenderCard item={services[0]} />
        </div>
        <div className="col-md m-1">
            <RenderCard item={services[1]} />
        </div>
        <div className="col-md m-1">
            <RenderCard item={services[2]} />
        </div>
    </div>
</div>
    </>
  );
}

export default Home;