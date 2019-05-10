import {Point, Timestamped, SmartObject, Activatable} from './mixin'

test('Can create a basic point', () => {
  let firstPoint = new Point(42, 84);
  expect(firstPoint.x).toBe(42);
})

test('Can create a extended point', () => {

  const TimestampedPoint = Timestamped(Point);

  const p = new TimestampedPoint(10, 10);
  expect(p.timestamp.getMilliseconds()).toBeGreaterThan(0);

  let p2 = new TimestampedPoint(20, 20);
  let p3 : Point = new TimestampedPoint(20, 20);
  p3.x;
})

test('With Mixins', () => {
  let x = new SmartObject();
  x.activate();
  expect(x.isActive).toBeTruthy();
  x.deactivate();
  expect(x.isActive).toBeFalsy();
})

test('variable assignment', () =>{
  let unspecifiedType = new SmartObject();
  expect(unspecifiedType.name).toBe("smart object");
  expect(unspecifiedType.isActive).toBeFalsy();

  let specifiedType : SmartObject = new SmartObject();
  expect(specifiedType.name).toBe("smart object");
  expect(specifiedType.isActive).toBeFalsy();

  let specifiedChildType : Activatable = new SmartObject();
  //expect(specifiedChildType.name).toBe("smart object");
  expect(specifiedChildType.isActive).toBeFalsy();


})