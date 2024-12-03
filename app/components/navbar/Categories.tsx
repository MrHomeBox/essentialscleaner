'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { LiaWarehouseSolid} from 'react-icons/lia';
import { FaSlideshare} from 'react-icons/fa';
import { MdOutlineHomeWork} from 'react-icons/md';
import { LuBedDouble} from 'react-icons/lu';
import { FaBed} from 'react-icons/fa';
import { GiVillage} from 'react-icons/gi';
import { } from 'react-icons/gi';
import { GiOfficeChair} from 'react-icons/gi';
import { PiVan} from 'react-icons/pi';
import { GiMeal} from 'react-icons/gi';
import { GiHealthNormal} from 'react-icons/gi';
import { MdOutlineLocalLaundryService} from 'react-icons/md';
import { BsSpeaker} from 'react-icons/bs';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Students',
    icon: PiStudent,
    description: 'These properties are for student accommodatiion!',
  },
  {
    label: 'Room',
    icon: LiaWarehouseSolid,
    description: 'These properties are for single room rental!',
  },
  {
    label: 'Apartment',
    icon: MdOutlineHomeWork,
    description: 'These properties are flatlets/apartments !'
  },
  {
    label: 'Shared',
    icon: FaSlideshare,
    description: 'These properties are for shared houses!'
  },
  {
    label: 'Bed&Breakfast',
    icon: LuBedDouble,
    description: 'These properties have swimming pools!'
  },
  {
    label: 'Lodge',
    icon: FaBed,
    description: 'These properties are lodges!'
  },
  {
    label: 'Villa',
    icon: GiVillage,
    description: 'These properties are a villas!'
  },
  {
    label: 'Commercial',
    icon: GiOfficeChair,
    description: 'These properties are for commecial use e.g office space!'
  },
  {
    label: 'Transport',
    icon: PiVan,
    description: 'These properties are for commecial use e.g office space!'
  },
  {
    label: 'Food',
    icon: GiMeal,
    description: 'These properties are for commecial use e.g office space!'
  },
  {
    label: 'Healthcare',
    icon: GiHealthNormal,
    description: 'These properties are for commecial use e.g office space!'
  },
  {
    label: 'Laundry',
    icon: MdOutlineLocalLaundryService,
    description: 'These properties are for commecial use e.g office space!'
  },
  {
    label: 'Entertainment',
    icon: BsSpeaker,
    description: 'These properties are for commecial use e.g office space!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;