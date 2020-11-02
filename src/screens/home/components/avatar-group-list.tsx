import { Avatar, AvatarGroup } from '@chakra-ui/core';

export function AvatarGroupList() {
  return (
    <AvatarGroup max={ 20 } d={ ['none', 'none', 'flex', 'flex'] }>
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Adnan' src='/avatars/adnan.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Zeeshan' src='/avatars/zeeshan.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Meabed' src='/avatars/meabed.png' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Ahmed' src='/avatars/ahmed.png' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Mustafa' src='/avatars/mustafa.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Hany' src='/avatars/hany.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Amad' src='/avatars/amad.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Abdallah' src='/avatars/abdallah.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Maradona' src='/avatars/maradona.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Segun' src='/avatars/segun.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Pavlo' src='/avatars/pavlo.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Furqan' src='/avatars/furqan.jpeg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Umar' src='/avatars/umar.jpg' />
      <Avatar className='avatar-badge' width={ '35px' } height='35px' borderColor='black' name='Pranjal' src='/avatars/pranjal.jpeg' />
    </AvatarGroup>
  );
}
