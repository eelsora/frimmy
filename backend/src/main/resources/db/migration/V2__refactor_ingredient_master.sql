-- 기존 ingredient 테이블을 마스터 테이블로 변경
-- 유저별 재료 정보(quantity, unit, expiration_date, created_at)를 제거하고 code 컬럼 추가

ALTER TABLE ingredient DROP COLUMN IF EXISTS quantity;
ALTER TABLE ingredient DROP COLUMN IF EXISTS unit;
ALTER TABLE ingredient DROP COLUMN IF EXISTS expiration_date;
ALTER TABLE ingredient DROP COLUMN IF EXISTS created_at;

ALTER TABLE ingredient ADD COLUMN IF NOT EXISTS code VARCHAR(255) NOT NULL DEFAULT '';
ALTER TABLE ingredient ADD CONSTRAINT uk_ingredient_code UNIQUE (code);
