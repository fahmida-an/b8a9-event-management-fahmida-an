import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../Shared/Header/Navbar';

const EventCard = () => {
    const [eventCard, setEventCard] = useState({});

    const events = useLoaderData();
    const { id } = useParams();
    const idt = parseInt(id);
    console.log(id);
  
    useEffect(() => {
      const eventDetail = events.find((events) => events.id === idt);
      setEventCard(eventDetail);
    }, [idt, events]);
    return (
        <div>
        <Navbar></Navbar>
        <div className="mt-10">
          <div>
            <img
              className=" max-w-xl h-[200] lg:max-w-4xl mx-auto lg:h-[400px] mb-10"
              src={eventCard.image}
              alt=""
            />
            <div className='flex mx-auto mx-w-sm text-center justify-center lg:max-w-4xl'>
            <h1 className="text-3xl font-bold mb-8 mr-2">{eventCard.category}</h1>
            <h1 className='btn bg-pinkdark1 text-orange'>Price: ${eventCard.price}</h1>
            </div>
          </div>
          <div>
            <p className="max-w-sm lg:max-w-4xl mx-auto text-justify text-dark2 text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              vero sequi quo minus quidem labore dolores autem nostrum facere
              accusamus, unde ab optio rerum assumenda officia deleniti provident
              natus pariatur iusto? Rerum voluptate qui voluptas! Aliquam quam,
              temporibus, non ipsum expedita repellendus totam maxime dolorem
              exercitationem porro minus ut asperiores, itaque veritatis fugiat
              recusandae impedit cupiditate explicabo amet hic ipsa nihil vero.
              Quidem veniam placeat aspernatur, suscipit minima, animi cum minus
              dolorum esse aut ipsam rerum, delectus culpa voluptate accusantium
              natus! Optio a inventore tenetur temporibus, velit rerum eligendi
              quas aspernatur animi delectus deleniti libero accusantium earum
              quidem, id error perspiciatis dolores fugit! Molestiae reiciendis
              nihil nostrum, asperiores sint illo consequatur aspernatur molestias
              perferendis, error, repellat ex? Vero rerum accusantium nemo
              voluptatibus fugit doloremque illum esse soluta eaque minima ea,
        
            </p>
          </div>
        </div>
      </div>
    );
};

export default EventCard;