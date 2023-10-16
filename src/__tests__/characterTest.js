import Character from '../character';
import Zombie from '../Zombie';

test('ошибка в имени', () => {
  expect(() => Character('R', 'Zombie').toThrowError('Имя должно содержать min - 2 символа, max - 10'));
});
test('ошибка в виде имени', () => {
  expect(() => Character(1, 'Zombie').toThrowError('Тип класса должен быть строкой'));
});
test('ошибка в типе', () => {
  expect(() => Character('Geka', 'Boweman').toThrowError('Выберите один из доступных типов классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie'));
});
test('Проверка удачного повышения уровня персонажа - Successful Level up', () => {
  const input = new Zombie('trpr', 'Zombie');
  input.levelUp();
  const result = {
    name: 'trpr',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  expect(input).toEqual(result);
});
test('Проверка неудачного повышения уровня персонажа - Unsuccessful Level up', () => {
  const input = new Zombie('trpr', 'Zombie');
  input.health = 0;
  expect(() => input.levelUp()).toThrow(new Error('нельзя повысить левел умершего'));
});
test('Проверка удачного нанесения урона персонажу - Successful damage', () => {
  const input = new Zombie('trpr', 'Zombie');
  input.damage(20);
  const result = {
    name: 'trpr',
    type: 'Zombie',
    health: 82,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(input).toEqual(result);
});
test('Проверка неудачного нанесения урона персонажу - Unsuccessful damage', () => {
  const input = new Zombie('trpr', 'Zombie');
  input.health = 0;
  expect(() => input.damage(20)).toThrow(new Error('персонаж мертв'));
});
