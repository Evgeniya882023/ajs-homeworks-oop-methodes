import Undead from '../Undead';

test('Создание персонажа для типа Undead', () => {
  const result = new Undead('Undead');

  expect(result).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
