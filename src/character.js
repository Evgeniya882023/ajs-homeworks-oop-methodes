export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeClass = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if ((name.length <= 2) || (name.length >= 10)) {
      throw new Error(
        'Имя должно содержать min - 2 символа, max - 10',
      );
    }
    if (typeof name !== 'string') {
      throw new Error('Тип класса должен быть строкой');
    }
    if (!typeClass.includes(type)) {
      throw new Error(
        'Выберите один из доступных типов классов: Bowman, Daemon, Magician, Swordsman, Undead, Zombie',
      );
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить левел умершего');
    }
    this.level += +1;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) throw new Error('персонаж мертв');
  }
}
