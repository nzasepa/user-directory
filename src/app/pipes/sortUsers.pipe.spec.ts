import { UserInterface } from '../interfaces/user.interface';
import { SortUsersPipe } from './sortUsers.pipe';

describe('SearchUsersPipe', () => {
  const pipe = new SortUsersPipe();
  const mockData = new Array(
    {
      name: {
        first: 'Test',
        last: 'Pipe'
      },
      email: 'test.pipe@hello.com',
      company: 'Hello World',
      isActive: false
    },
    {
      name: {
        first: 'Test123',
        last: 'Pipe123'
      },
      email: 'test123.pipe123@hello.com',
      company: 'Google',
      isActive: true
    },
    {
      name: {
        first: 'Test321',
        last: 'Pipe321'
      },
      email: 'test321.pipe321@hello.com',
      company: 'Microsoft',
      isActive: false
    },
  );

  it('should return "Test" as first result for sort by name', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'name')[0].name.first).toEqual('Test')
  })

  it('should return "Test123" as first result for sort by status', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'status')[0].name.first).toEqual('Test123')
  })

  it('should return "Test123" as first result for sort by company', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'company')[0].name.first).toEqual('Test123')
  })

  it('should return "Test" as first result for sort by email', () => {
    expect(pipe.transform(mockData as Array<UserInterface>, 'email')[0].name.first).toEqual('Test')
  })
});