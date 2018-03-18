import { SearchUsersPipe } from './searchUsers.pipe';
import { UserInterface } from '../interfaces/user.interface';

describe('SearchUsersPipe', () => {
  const pipe = new SearchUsersPipe();
  const mockData = new Array(
    {
      name: {
        first: 'Test',
        last: 'Pipe'
      },
      email: 'test.pipe@hello.com',
      company: 'Hello World'
    },
    {
      name: {
        first: 'Test123',
        last: 'Pipe123'
      },
      email: 'test123.pipe123@hello.com',
      company: 'Google'
    },
    {
      name: {
        first: 'Test321',
        last: 'Pipe321'
      },
      email: 'test321.pipe321@hello.com',
      company: 'Microsoft'
    },
  );

  it('should return 1 result for search "test123"', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'test123').length).toEqual(1);
  });

  it('should return 3 results for search "test"', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'test').length).toEqual(3);
  });
});
