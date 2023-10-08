import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Header/Navbar";

const ServiceCardDetails = () => {
  const [detailCard, setDetailCard] = useState({});

  const details = useLoaderData();
  const { id } = useParams();
  const idt = parseInt(id);
  console.log(id);

  useEffect(() => {
    const eventDetail = details.find((details) => details.id === idt);
    setDetailCard(eventDetail);
  }, [idt, details]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-2">
          <img
            className="max-w-4xl mx-auto h-[400px] mb-10"
            src={detailCard.image}
            alt=""
          />
          <h1 className="text-3xl text-center font-bold mx-auto">{detailCard.category}</h1>
        </div>
        <div>
          <p className="w-80 mx-auto text-justify text-dark2 text-md">
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

export default ServiceCardDetails;
