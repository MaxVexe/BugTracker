import { describe, expect, test, it} from 'vitest'
import { sum } from '../componets/Practice'

describe('test practice', () => {
    it('should return value 3', ()=> {
        
        expect(sum(1,2)).toBe(3)
    })

})