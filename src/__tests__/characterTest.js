import Character from '../character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

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

test('Создание персонажа для типа Daemon', () => {
  const result = new Daemon('Daemon');

  expect(result).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание персонажа для типа Magician', () => {
  const result = new Magician('Magician');

  expect(result).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание персонажа для типа Swordsman', () => {
  const result = new Swordsman('Swordsman');

  expect(result).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

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

test('Создание персонажа для типа Zombie', () => {
  const result = new Zombie('Zombie');

  expect(result).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

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
