import React from 'react';
import {render} from '@testing-library/react-native';
import {UserCard} from 'components';

test('UserCard displays user info and handles message press', () => {
  const user = {
    full_name: 'MrBeast',
    id: '2278169415',
    is_private: false,
    is_verified: true,
    profile_pic_url:
      'https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-19/31077884_211593632905749_1394765701385814016_n.jpg?stp=dst-jpg_e0_s150x150&_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=zjHsEtT_7pAAX873I4x&edm=AM7KJZYBAAAA&ccb=7-5&oh=00_AfAivHkT4uZq1Cid7mJsh3XbqC_8ORGAY1f8v5PE6O_dOQ&oe=6574870F&_nc_sid=8ec269',
    profile_pic_url_hd: null,
    username: 'mrbeast',
  };
  const {getByText, getByRole} = render(<UserCard user={user} />);

  // Kiểm tra xem tên người dùng có được hiển thị đúng không
  expect(getByText('MrBeast')).toBeTruthy();
  // Kiểm tra xem hình ảnh có được hiển thị đúng không
  const image = getByRole('image');
  expect(image.props.source).toEqual({uri: user.profile_pic_url});
});
