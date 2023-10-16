import Bowman from '../Bowman';

test('Создание персонажа для типа Bowman', () => {
  const result = new Bowman('Bowman');

  expect(result).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

